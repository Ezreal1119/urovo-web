# ADB integration architecture (Phase C)

Concise reference for how `WebAdbService` is owned, exposed, and consumed. **Do not bypass these rules** without an explicit design pass.

---

## 1. High-level architecture

| Piece | Role |
|--------|------|
| **`app/tools/adb/page.tsx`** | **Owner.** Creates `WebAdbService`, holds it in `adbServiceRef`, connects/disconnects, and is the **only** place that **writes** `window.adbService` (assign + `delete`). |
| **`window.adbService`** | **Temporary global bridge** so non-owner code and the unified reader can reach the live instance without prop drilling. |
| **`getCurrentAdbService()`** (`lib/adbService.ts`) | **Unified read entry.** Resolves `_override ?? window.adbService ?? null`. **Only this module** should read `window.adbService` directly. |
| **`useAdbService()`** (`app/tools/adb/_lib/adb-context.tsx`) | **React integration.** Uses context when non-null; otherwise falls back to `getCurrentAdbService()`. |
| **`AdbServiceProvider`** (`layout.tsx`) | Seeds context from `getCurrentAdbService()` on layout render (SSR-safe). |

---

## 2. Data flow

1. **Create:** `page.tsx` instantiates `WebAdbService` (lazy via ref) on connect.
2. **Store:** Primary store is **`adbServiceRef`** on the page. After connect, the same instance is mirrored to **`window.adbService`**.
3. **Read (non-React / imperative):** Call **`getCurrentAdbService()`** (respects module override for tests/DI).
4. **Read (React UI):** Call **`useAdbService()`** in client components under the ADB layout.
5. **Teardown:** User disconnect runs **`delete window.adbService`** from `page.tsx` (see *trade-offs* for abrupt disconnect paths).

---

## 3. Rules

- **DO NOT** read `window.adbService` directly anywhere except **`lib/adbService.ts`** (inside `getCurrentAdbService()`).
- **DO NOT** assign or delete `window.adbService` outside **`app/tools/adb/page.tsx`**.
- **Prefer `useAdbService()`** in UI components under the ADB route.
- **Use `getCurrentAdbService()`** when you need **execution-time** freshness (e.g. inside an async handler) and a hook-bound value might lag behind the global/ref.
- **`setAdbServiceOverride()`** is for controlled substitution (e.g. tests); keep overrides scoped and cleared when done.

---

## 4. Known trade-offs

- **Stale hook value:** `useAdbService()` resolves once per render (and context is a snapshot from layout). If `window.adbService` or override changes **without** a re-render, a handler may see an older reference than a fresh `getCurrentAdbService()` call would return.
- **Global vs ref lifecycle:** `markDisconnected` clears **`adbServiceRef`** but does not always clear **`window.adbService`**. After abrupt disconnect, the global can briefly disagree with ref until the user goes through normal disconnect or another sync. Consumers that only use `getCurrentAdbService()` may still see a non-null instance when the page ref is already null.

---

## 5. Future improvements (optional)

- Remove **`window.adbService`** once all consumers use context/ref/override only.
- **Sync provider value** when connection state changes (or tie **`setAdbServiceOverride`** to the page owner) so context is not layout-snapshot-only.
- **Fully context-driven** tree: page sets provider value (or override) in lockstep with ref, then delete the global.

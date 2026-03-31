"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

type ChatResponse = {
  id: string;
  message: string;
};

export function AiChatDialog() {
  const [input, setInput] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);
  const [isComposing, setIsComposing] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi, This is AI Patrick from Urovo. How can I help you today?",
    },
  ]);
  const conversationId = React.useRef(crypto.randomUUID());
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);
  const suppressAutoFocusRef = React.useRef(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });

    return () => cancelAnimationFrame(id);
  }, [messages, isSending]);
  React.useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  React.useEffect(() => {
    function handleOpenAI(e: Event) {
      const customEvent = e as CustomEvent<{ prompt?: string }>;
      const prompt = customEvent.detail?.prompt;

      if (!prompt) return;

      suppressAutoFocusRef.current = true;

      setInput("");
      setOpen(true);

      requestAnimationFrame(() => {
        void handleSendWithPrompt(prompt);
      });
    }

    window.addEventListener("open-ai-chat", handleOpenAI);

    return () => {
      window.removeEventListener("open-ai-chat", handleOpenAI);
    };
  }, []);

  async function handleSendWithPrompt(prompt: string) {
    const trimmed = prompt.trim();
    if (!trimmed || isSending) return;

    setInput("");

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: trimmed,
          conversationId: conversationId.current,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data: ChatResponse = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: data.id,
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsSending(false);
      setInput("");
    }
  }

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: trimmed,
          conversationId: conversationId.current,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data: ChatResponse = await res.json();

      const assistantMessage: ChatMessage = {
        id: data.id,
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSending(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      !isComposing &&
      !e.nativeEvent.isComposing
    ) {
      e.preventDefault();
      void handleSend();
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="
            fixed bottom-6 right-6 z-40
            inline-flex items-center gap-3
            rounded-full
            border border-white/10
            bg-white/[0.08]
            px-4 py-2
            text-base font-medium text-white
            shadow-[0_12px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-all duration-200
            hover:bg-white/[0.12]
            hover:shadow-[0_16px_50px_rgba(0,0,0,0.45)]
            hover:-translate-y-0.5
          "
        >
          <span className="tracking-[0.01em]">Ask AI</span>

          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10">
            <img
              src="/qwen-icon.svg"
              alt="AI avatar"
              className="h-full w-full object-cover"
            />
          </span>
        </button>
      </DialogTrigger>

      <DialogContent
        onOpenAutoFocus={(e) => {
          if (suppressAutoFocusRef.current) {
            e.preventDefault();
            suppressAutoFocusRef.current = false;
          }
        }}
        className="
         isolate transform-gpu
          w-[92vw]
          sm:max-w-5xl
          h-[68vh]
          p-0
          overflow-hidden

          rounded-3xl
          border border-white/10
          bg-[linear-gradient(180deg,rgba(10,10,12,0.92),rgba(10,10,12,0.96))]
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(168,85,247,0.08),transparent_70%)]"
        />
        <DialogTitle className="sr-only">AI Assistant</DialogTitle>

        <div className="flex h-full min-h-0 flex-col">
          <div className="border-b border-white/10 px-6 py-4">
            <div className="text-sm font-medium text-foreground">
              Urovo AI Assistant
            </div>
            <div className="mt-1 text-xs text-foreground/50">
              Ask about Urovo's Products
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto px-7 py-8 space-y-5">
            {messages.map((message) =>
              message.role === "assistant" ? (
                <div
                  key={message.id}
                  className="flex items-start gap-3 max-w-[75%]"
                >
                  <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/10">
                    <img
                      src="/patrick_selfie.png"
                      alt="AI Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-foreground/78">
                    <div className="prose prose-invert prose-sm max-w-none prose-p:my-2 prose-headings:my-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-pre:my-3 prose-code:text-foreground">
                      <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={message.id}
                  className="ml-auto max-w-[72%] rounded-2xl border border-white/8 bg-white/[0.08] px-4 py-3 text-sm leading-7 text-foreground"
                >
                  <div className="prose prose-invert prose-sm max-w-none prose-p:my-2 prose-headings:my-3 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-pre:my-3 prose-code:text-foreground">
                    <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ),
            )}

            {isSending && <AiThinkingBubble />}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/8 px-5 py-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="flex items-end gap-3">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onCompositionStart={() => setIsComposing(true)}
                  onCompositionEnd={() => setIsComposing(false)}
                  placeholder="Ask anything..."
                  className="
                    min-h-[36px]
                    py-1.5
                    max-h-[140px]
                    resize-none
                    border-0
                    bg-transparent
                    px-2 py-2
                    text-sm leading-6 text-foreground
                    placeholder:text-foreground/35
                    focus-visible:ring-0
                    focus-visible:outline-none
                  "
                />

                <Button
                  onClick={() => void handleSend()}
                  disabled={!input.trim() || isSending}
                  className="
                    h-11 rounded-xl px-5 
                    bg-pink-500/90 text-white
                    shadow-[0_8px_24px_rgba(236,72,153,0.22)]
                    transition-all duration-200
                    hover:bg-pink-500 hover:shadow-[0_10px_30px_rgba(236,72,153,0.28)]
                  "
                >
                  {isSending ? "Sending..." : "Send"}
                </Button>
              </div>

              <div className="mt-2 px-2 text-[11px] text-foreground/30">
                Enter to send · Shift + Enter for newline
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function AiThinkingBubble() {
  return (
    <div className="flex items-start gap-3 max-w-[75%]">
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/10">
        <img
          src="/patrick_selfie.png"
          alt="AI Avatar"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="rounded-2xl border border-white/6 bg-white/[0.04] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/35 animate-pulse [animation-delay:0ms]" />
          <span className="h-2 w-2 rounded-full bg-white/35 animate-pulse [animation-delay:200ms]" />
          <span className="h-2 w-2 rounded-full bg-white/35 animate-pulse [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}

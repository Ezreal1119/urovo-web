import forge from "node-forge";

const EOCD_SIG = new Uint8Array([0x50, 0x4b, 0x05, 0x06]);
const MAGIC = new TextEncoder().encode("APK Sig Block 42");
const MAGIC_LEN = 16;
const UROVO_V3_ID = 0x7109871c;

export type ApkSignatureResult = {
  hasUrovoV3: boolean;
  subjectCN?: string;
  issuerCN?: string;
  validFrom?: string;
  validTo?: string;
};

export async function detectUrovoSignature(
  file: File,
): Promise<ApkSignatureResult> {
  try {
    const buf = await file.arrayBuffer();
    const data = new Uint8Array(buf);

    const cdOff = findCentralDirectory(data);
    if (cdOff < 0) return { hasUrovoV3: false };

    const v3 = findUrovoV3Block(data, cdOff);
    if (!v3) return { hasUrovoV3: false };

    const pem = extractPem(v3);
    if (!pem) return { hasUrovoV3: true };

    const cert = forge.pki.certificateFromPem(pem);

    return {
      hasUrovoV3: true,
      subjectCN: getCN(cert.subject.attributes),
      issuerCN: getCN(cert.issuer.attributes),
      validFrom: cert.validity.notBefore.toISOString(),
      validTo: cert.validity.notAfter.toISOString(),
    };
  } catch (e) {
    console.warn("[apk-detect] failed:", e);
    return { hasUrovoV3: false };
  }
}

function getCN(attrs: any[]) {
  const cn = attrs.find((a) => a.shortName === "CN");
  return cn?.value || "—";
}

function findCentralDirectory(data: Uint8Array) {
  const maxBack = Math.min(data.length, 0xffff + 22);
  const start = data.length - maxBack;

  for (let i = data.length - 4; i >= start; i--) {
    if (
      data[i] === 0x50 &&
      data[i + 1] === 0x4b &&
      data[i + 2] === 0x05 &&
      data[i + 3] === 0x06
    ) {
      const dv = new DataView(data.buffer);
      return dv.getUint32(i + 16, true);
    }
  }
  return -1;
}

function findUrovoV3Block(data: Uint8Array, cdOff: number) {
  const dv = new DataView(data.buffer);

  const footerOff = cdOff - 8 - MAGIC_LEN;
  const size = dv.getBigUint64(footerOff, true);

  const magic = data.slice(footerOff + 8, footerOff + 24);
  if (!equals(magic, MAGIC)) return null;

  const sbStart = Number(BigInt(cdOff) - (size + 8n));
  const pairs = data.slice(sbStart + 8, footerOff);

  let pos = 0;
  while (pos + 8 <= pairs.length) {
    const len = Number(dv.getBigUint64(sbStart + 8 + pos, true));
    pos += 8;

    const id = dv.getUint32(sbStart + 8 + pos, true);
    pos += 4;

    const value = pairs.slice(pos, pos + len - 4);
    pos += len - 4;

    if (id === UROVO_V3_ID) return value;
  }

  return null;
}

function extractPem(data: Uint8Array): string | null {
  try {
    const text = new TextDecoder().decode(data);
    const begin = text.indexOf("-----BEGIN CERTIFICATE-----");
    const end = text.indexOf("-----END CERTIFICATE-----");

    if (begin < 0 || end < 0) return null;

    return text.substring(begin, end + 25);
  } catch {
    return null;
  }
}

function equals(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

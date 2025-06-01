// src/audit.ts
import { Signature } from "liboqs-node";

const sig = new Signature("SphincsHaraka256s");

let auditPrivateKey: Uint8Array | null = null;
let auditPublicKey: Uint8Array | null = null;

/**
 * Generate SPHINCS+ key pair for audit logs.
 */
export function generateAuditKeyPair() {
  const { publicKey, secretKey } = sig.generateKeyPair();
  auditPrivateKey = secretKey;
  auditPublicKey = publicKey;
  return { publicKey, privateKey: secretKey };
}

/**
 * Sign audit log data using SPHINCS+.
 * @param data - data to sign as Uint8Array
 * @returns signature as Uint8Array
 */
export function signAuditLog(data: Uint8Array): Uint8Array {
  if (!auditPrivateKey) {
    throw new Error(
      "Audit key pair not generated yet. Call generateAuditKeyPair() first."
    );
  }
  return sig.sign(data, auditPrivateKey);
}

/**
 * Verify SPHINCS+ audit log signature.
 * @param data - original data
 * @param signature - signature to verify
 * @returns boolean if valid
 */
export function verifyAuditLog(
  data: Uint8Array,
  signature: Uint8Array
): boolean {
  if (!auditPublicKey) {
    throw new Error(
      "Audit key pair not generated yet. Call generateAuditKeyPair() first."
    );
  }
  return sig.verify(data, signature, auditPublicKey);
}

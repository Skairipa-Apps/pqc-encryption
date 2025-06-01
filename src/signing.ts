// src/signing.ts
import { Signature } from "liboqs-node";

const sig = new Signature("Falcon512");

let signingPrivateKey: Uint8Array | null = null;
let signingPublicKey: Uint8Array | null = null;

/**
 * Generate Falcon-512 key pair.
 */
export function generateKeyPair() {
  const { publicKey, secretKey } = sig.generateKeyPair();
  signingPrivateKey = secretKey;
  signingPublicKey = publicKey;
  return { publicKey, privateKey: secretKey };
}

/**
 * Sign data using Falcon-512.
 * @param data - Uint8Array data to sign
 * @returns signature Uint8Array
 */
export function signWithFalcon(data: Uint8Array): Uint8Array {
  if (!signingPrivateKey) {
    throw new Error(
      "Key pair not generated yet. Call generateKeyPair() first."
    );
  }
  return sig.sign(data, signingPrivateKey);
}

/**
 * Verify Falcon-512 signature.
 * @param data - original data Uint8Array
 * @param signature - signature Uint8Array
 * @returns boolean validity
 */
export function verifyWithFalcon(
  data: Uint8Array,
  signature: Uint8Array
): boolean {
  if (!signingPublicKey) {
    throw new Error(
      "Key pair not generated yet. Call generateKeyPair() first."
    );
  }
  return sig.verify(data, signature, signingPublicKey);
}

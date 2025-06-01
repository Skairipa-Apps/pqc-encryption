// src/kyber.ts
import { KeyEncapsulation } from "liboqs-node";

const kem = new KeyEncapsulation("Kyber768");

let kyberPublicKey: Uint8Array | null = null;
let kyberPrivateKey: Uint8Array | null = null;

/**
 * Generate Kyber-768 key pair
 */
export function generateKyberKeyPair() {
  const { publicKey, secretKey } = kem.generateKeyPair();
  kyberPublicKey = publicKey;
  kyberPrivateKey = secretKey;
  return { publicKey, privateKey: secretKey };
}

/**
 * Encapsulate a shared secret using Kyber-768 public key
 * Returns { ciphertext, sharedSecret }
 */
export function kyberEncapsulate(publicKey: Uint8Array) {
  return kem.encapsulate(publicKey);
}

/**
 * Decapsulate ciphertext using Kyber-768 private key
 * Returns sharedSecret
 */
export function kyberDecapsulate(ciphertext: Uint8Array) {
  if (!kyberPrivateKey) {
    throw new Error("Kyber private key not generated");
  }
  return kem.decapsulate(ciphertext, kyberPrivateKey);
}

/**
 * Set the Kyber private key (for decrypting)
 */
export function setKyberPrivateKey(privateKey: Uint8Array) {
  kyberPrivateKey = privateKey;
}

/**
 * Set the Kyber public key (for encrypting)
 */
export function setKyberPublicKey(publicKey: Uint8Array) {
  kyberPublicKey = publicKey;
}

export { kyberPublicKey, kyberPrivateKey };

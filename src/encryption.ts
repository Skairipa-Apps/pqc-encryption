// src/encryption.ts
import crypto from "node:crypto";
import { kyberEncapsulate, kyberDecapsulate } from "./kyber";

export interface EncryptedData {
  iv: Buffer;
  ciphertext: Buffer;
  tag: Buffer;
  encapsulatedKey: Uint8Array;
}

/**
 * Encrypt plaintext using AES-256-GCM, and encapsulate AES key with Kyber public key.
 * Returns IV, ciphertext, auth tag, and Kyber encapsulated AES key.
 */
export function encryptPIIData(
  plaintext: string,
  kyberPublicKey: Uint8Array
): EncryptedData {
  const { ciphertext: encapsulatedKey, sharedSecret: aesKey } =
    kyberEncapsulate(kyberPublicKey);

  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", Buffer.from(aesKey), iv);

  const ciphertext = Buffer.concat([
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();

  return { iv, ciphertext, tag, encapsulatedKey };
}


/**
 * Decrypt encrypted data using Kyber private key to recover AES key,
 * then decrypt AES-256-GCM ciphertext.
 */
export function decryptPIIData(
  encrypted: EncryptedData,
  kyberPrivateKey: Uint8Array
): string {
  // Decapsulate to recover AES key
  const aesKey = kyberDecapsulate(encrypted.encapsulatedKey);

  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    Buffer.from(aesKey),
    encrypted.iv
  );
  decipher.setAuthTag(encrypted.tag);
  const decrypted = Buffer.concat([
    decipher.update(encrypted.ciphertext),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}

import { test, expect } from "bun:test";
import { encryptPIIData, decryptPIIData } from "../encryption";
import { generateKyberKeyPair } from "../kyber";

test("PII data encryption and decryption roundtrip", () => {
  const { publicKey, privateKey } = generateKyberKeyPair();

  const plaintext = "Sensitive PII";
  const encrypted = encryptPIIData(plaintext, publicKey);
  const decrypted = decryptPIIData(encrypted, privateKey);

  expect(decrypted).toBe(plaintext);
});

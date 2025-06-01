import { test, expect } from "bun:test";
import {
  generateKyberKeyPair,
  kyberEncapsulate,
  kyberDecapsulate,
  setKyberPrivateKey,
} from "../kyber";

test("Kyber encapsulation and decapsulation returns the same shared secret", () => {
  const { publicKey, privateKey } = generateKyberKeyPair();
  const { ciphertext, sharedSecret } = kyberEncapsulate(publicKey);

  setKyberPrivateKey(privateKey);
  const decapsulated = kyberDecapsulate(ciphertext);

  expect(Buffer.from(decapsulated).toString("hex")).toBe(
    Buffer.from(sharedSecret).toString("hex")
  );
});

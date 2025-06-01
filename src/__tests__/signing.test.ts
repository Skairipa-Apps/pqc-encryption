import { test, expect } from "bun:test";
import { generateKeyPair, signWithFalcon, verifyWithFalcon } from "../signing";

test("Falcon signature should verify correctly", () => {
  const { publicKey } = generateKeyPair();

  const message = Buffer.from("hello");
  const signature = signWithFalcon(message);

  const valid = verifyWithFalcon(message, signature);
  expect(valid).toBe(true);
});

test("Falcon signature should fail on tampered data", () => {
  generateKeyPair();

  const message = Buffer.from("hello");
  const tampered = Buffer.from("hellx");
  const signature = signWithFalcon(message);

  const valid = verifyWithFalcon(tampered, signature);
  expect(valid).toBe(false);
});

import { test, expect } from "bun:test";
import { hash256, hash512 } from "../hashing";

test("SHA3-256 should produce 64-character hex", () => {
  const hash = hash256("hello");
  expect(hash).toMatch(/^[a-f0-9]{64}$/);
});

test("SHA3-512 should produce 128-character hex", () => {
  const hash = hash512("hello");
  expect(hash).toMatch(/^[a-f0-9]{128}$/);
});

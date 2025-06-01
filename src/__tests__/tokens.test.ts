import { test, expect } from "bun:test";
import { hmacSha3 } from "../tokens";

test("hmacSha3 should return 64-character hex string", () => {
  const key = "secret";
  const data = "message";
  const hmac = hmacSha3(key, data);

  expect(hmac).toMatch(/^[a-f0-9]{64}$/);
});

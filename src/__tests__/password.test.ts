import { test, expect } from "bun:test";
import { hashPassword, verifyPassword } from "../password";

test("hashPassword and verifyPassword should work", async () => {
  const password = "securepass";
  const salt = "somesalt";

  const hash = await hashPassword(password, salt);
  expect(hash).toMatch(/^[a-f0-9]{64}$/);

  const isValid = await verifyPassword(hash, password, salt);
  expect(isValid).toBe(true);

  const isInvalid = await verifyPassword(hash, "wrongpass", salt);
  expect(isInvalid).toBe(false);
});

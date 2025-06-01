import { test, expect } from "bun:test";
import { generateAuditKeyPair, signAuditLog, verifyAuditLog } from "../audit";

test("Audit signing and verification should work", () => {
  generateAuditKeyPair();

  const logData = Buffer.from("audit log entry");
  const signature = signAuditLog(logData);

  const isValid = verifyAuditLog(logData, signature);
  expect(isValid).toBe(true);
});

test("Tampered audit data should fail verification", () => {
  generateAuditKeyPair();

  const logData = Buffer.from("original log");
  const tampered = Buffer.from("tampered log");
  const signature = signAuditLog(logData);

  const isValid = verifyAuditLog(tampered, signature);
  expect(isValid).toBe(false);
});

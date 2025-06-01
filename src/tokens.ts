import { createHmac } from "node:crypto";

export function hmacSha3(key: string, data: string): string {
  return createHmac("sha3-256", key).update(data).digest("hex");
}
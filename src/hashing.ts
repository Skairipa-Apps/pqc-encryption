import { sha3_256, sha3_512 } from "js-sha3";

export const hash256 = (input: string): string => sha3_256(input);
export const hash512 = (input: string): string => sha3_512(input);
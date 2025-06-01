import { argon2id } from "hash-wasm";
import { sha3_256 } from "js-sha3";

export const hashPassword = async (password: string, salt: string): Promise<string> => {
    const hash = await argon2id({
        password,
        salt,
        memorySize: 65536,
        hashLength: 32,
        parallelism: 1,
        iterations: 3,
        type: 2
    });

    return sha3_256(hash);
}

export const verifyPassword = async (hash: string,password: string, salt: string): Promise<boolean> => {
    return hashPassword(password, salt).then(h => h === hash);
}
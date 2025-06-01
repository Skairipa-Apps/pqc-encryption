PQC-encryption
==================

[LICENSE](https://github.com/Skairipa-Apps/pqc-encryption/blob/main/LICENSE)

**Post-Quantum Cryptography (PQC) Encryption Library**  
Developed and maintained by **Skairipa Apps Inc.**

___________

Overview
--------

PQC-encryption-src is a TypeScript/JavaScript library providing a suite of post-quantum cryptographic primitives, including key encapsulation (Kyber-768), signature schemes (Falcon-512 and SPHINCS+), password hashing (Argon2id + SHA3), and symmetric encryption with AES-256-GCM.

This library enables developers to build secure applications resistant to future quantum attacks by leveraging state-of-the-art post-quantum algorithms combined with established cryptographic standards.

___________

Features
--------

*   **Kyber-768 Key Encapsulation Mechanism (KEM)** for secure key exchange
    
*   **Falcon-512 and SPHINCS+ Signature Schemes** for quantum-resistant digital signatures
    
*   **Argon2id + SHA3-256 Password Hashing** for secure password storage and verification
    
*   **AES-256-GCM Symmetric Encryption** with Kyber encapsulated keys for encrypting sensitive data
    
*   **HMAC-SHA3 for message authentication**
    
*   Comprehensive unit tests for all cryptographic components
    

___________

Installation
------------

Install using your package manager (assuming published as an npm package):

```bash
npm install @skairipaapps/pqc-encryption
# or
yarn add @skairipaapps/pqc-encryption
# or
bun i @skairipaapps/pqc-encryption
```

___________

Usage
-----

Import and use the modules according to your cryptographic needs:

```ts
import * as pqc from "pqc-encryption";

// Generate Kyber key pair
const { publicKey, privateKey } = pqc.kyber.generateKyberKeyPair();

// Encrypt sensitive data
const encryptedData = pqc.encryption.encryptPIIData("Sensitive Data", publicKey);

// Decrypt sensitive data
const decryptedData = pqc.encryption.decryptPIIData(encryptedData, privateKey);

// Generate Falcon signature key pair
const { publicKey: signPub, privateKey: signPriv } = pqc.signing.generateKeyPair();

// Sign data
const signature = pqc.signing.signWithFalcon(Buffer.from("message"));

// Verify signature
const isValid = pqc.signing.verifyWithFalcon(Buffer.from("message"), signature);
```

Refer to individual module files for detailed API usage.

___________

Module Summary
--------------

Module

Description

`hashing`

SHA3-256 and SHA3-512 hash functions

`kyber`

Kyber-768 key generation, encapsulation, decapsulation

`password`

Argon2id + SHA3 password hashing and verification

`tokens`

HMAC-SHA3 message authentication

`encryption`

AES-256-GCM encryption/decryption with Kyber key encapsulation

`signing`

Falcon-512 signature generation and verification

`audit`

SPHINCS+ signature generation and verification for audit logs

___________

Development & Testing
---------------------

The project uses [Bun](https://bun.sh/) for testing and build tooling.

Run the test suite with:

```bash
bun test
```

Tests cover key generation, encryption/decryption, hashing, signing, and verification to ensure cryptographic integrity.

___________

Contributing
------------

Contributions and feedback are welcome! Please open issues or pull requests on the official repository.

___________

License
-------

This project is licensed under the **MIT License** — see the [LICENSE](https://github.com/Skairipa-Apps/pqc-encryption/blob/main/LICENSE) file for details.

___________

About Skairipa Apps Inc.
------------------------

Skairipa Apps Inc. specializes in developing cutting-edge cryptographic and security solutions designed for the modern, post-quantum era. We are committed to building software that prepares applications for the challenges of tomorrow’s computing landscape.

___________

If you want me to include a **Getting Started** guide or more detailed API documentation, just let me know!


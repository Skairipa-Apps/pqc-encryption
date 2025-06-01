declare module "liboqs-node" {
  export interface Signature {
    // Add typings here if you want, or use any for now:
    [key: string]: any;
  }

  export interface KeyEncapsulation {
    [key: string]: any;
  }

  export const Signature: any;
  export const KeyEncapsulation: any;
}

import type { AccountId, Hash, Signature, Balance } from './types'

/**
 * Decides whether we take the role of partyA in the channel with `counterparty`.
 * @param self id of ourself
 * @param counterparty id of the counterparty
*/
export declare function isPartyA<ConcreteAccountId extends AccountId>(self: ConcreteAccountId, counterparty: ConcreteAccountId): boolean

/**
 * Returns the Id of the channel between ourself and `counterparty`.
 * @param self id of ourself
 * @param counterparty id of the counterparty
 * @param props additional arguments
 */
export declare function getId<ConcreteAccountId extends AccountId, ConcreteHash extends Hash>(self: ConcreteAccountId, counterparty: ConcreteAccountId, ...props: any[]): Promise<ConcreteHash>

/**
 * Converts a public key into an on-chain AccountId (e.g. an Ethereum address).
 * @param pubkey a public key
 * @param args additional arguments
 */
export declare function pubKeyToAccountId<ConcreteAccountId extends AccountId>(pubkey: Uint8Array, ...args: any[]): Promise<ConcreteAccountId>

/**
 * Uses the native on-chain hash function to compute a hash value of `msg`.
 * @param msg message to hash
 */
export declare function hash<ConcreteHash extends Hash>(msg: Uint8Array): Promise<ConcreteHash>

/**
 * Uses the native on-chain signature scheme to create an on-chain verifiable signature.
 * @param msg message to sign
 * @param privKey private key of the signer
 * @param pubKey public key of the signer
 */
export declare function sign<ConcreteSignature extends Signature>(msg: Uint8Array, privKey: Uint8Array, pubKey: Uint8Array): Promise<ConcreteSignature>

/**
 * Uses the native on-chain signature scheme to check a signature for its validity.
 * @param msg message to verify
 * @param signature signature over `msg` to verify
 * @param pubkey public key of the signer
 */
export declare function verify<ConcreteSignature extends Signature>(msg: Uint8Array, signature: ConcreteSignature, pubkey: Uint8Array): Promise<boolean>

/**
 * Takes an amount and converts it from one unit to another one.
 * @param amount to convert
 * @param sourceUnit unit of `amount`
 * @param targetUnit desired unit of the result
 * @example
 * ```
 * fromUnit('1000000000000000000', 'wei', 'ether') == '1'
 * fromUnit('1', 'ether', 'wei') == '1000000000000000000'
 * ```
 */
export declare function convertUnit<ConcreteBalance extends Balance>(amount: ConcreteBalance, sourceUnit: string, targetUnit: string): ConcreteBalance
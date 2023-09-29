/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { OnEvent, TypedEvent, TypedEventFilter } from "./common";

export interface ArrayInterface extends utils.Interface {
  functions: {
    "_joinReferenceType(uint256,uint256)": FunctionFragment;
    "join(bytes16[])": FunctionFragment;
    "join(bytes[])": FunctionFragment;
    "join(bytes4[])": FunctionFragment;
    "join(bytes[],bytes)": FunctionFragment;
    "join(bytes32[])": FunctionFragment;
    "join(bytes3[])": FunctionFragment;
    "join(bytes8[])": FunctionFragment;
    "join(string[])": FunctionFragment;
    "join(bytes2[])": FunctionFragment;
    "join(uint16[])": FunctionFragment;
    "join(string[],string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_joinReferenceType"
      | "join(bytes16[])"
      | "join(bytes[])"
      | "join(bytes4[])"
      | "join(bytes[],bytes)"
      | "join(bytes32[])"
      | "join(bytes3[])"
      | "join(bytes8[])"
      | "join(string[])"
      | "join(bytes2[])"
      | "join(uint16[])"
      | "join(string[],string)",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_joinReferenceType",
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "join(bytes16[])",
    values: [BytesLike[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(bytes[])",
    values: [BytesLike[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(bytes4[])",
    values: [BytesLike[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(bytes[],bytes)",
    values: [BytesLike[], BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "join(bytes32[])",
    values: [BytesLike[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(bytes3[])",
    values: [BytesLike[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(bytes8[])",
    values: [BytesLike[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(string[])",
    values: [string[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(bytes2[])",
    values: [BytesLike[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(uint16[])",
    values: [BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: "join(string[],string)",
    values: [string[], string],
  ): string;

  decodeFunctionResult(
    functionFragment: "_joinReferenceType",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(bytes16[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(bytes[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(bytes4[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(bytes[],bytes)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(bytes32[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(bytes3[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(bytes8[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(string[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(bytes2[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(uint16[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "join(string[],string)",
    data: BytesLike,
  ): Result;

  events: {};
}

export interface Array extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ArrayInterface;

  // queryFilter<TEvent extends TypedEvent>(
  //   event: TypedEventFilter<TEvent>,
  //   fromBlockOrBlockhash?: string | number | undefined,
  //   toBlock?: string | number | undefined
  // ): Promise<Array<TEvent>>;

  // listeners<TEvent extends TypedEvent>(
  //   eventFilter?: TypedEventFilter<TEvent>
  // ): Array<TypedListener<TEvent>>;
  // listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _joinReferenceType(
      inputPointer: BigNumberish,
      gluePointer: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { tempBytes: string }>;

    "join(bytes16[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(bytes[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(bytes4[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(bytes[],bytes)"(
      a: BytesLike[],
      glue: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(bytes32[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(bytes3[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(bytes8[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(string[])"(a: string[], overrides?: CallOverrides): Promise<[string]>;

    "join(bytes2[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(uint16[])"(
      a: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<[string]>;

    "join(string[],string)"(
      a: string[],
      glue: string,
      overrides?: CallOverrides,
    ): Promise<[string]>;
  };

  _joinReferenceType(
    inputPointer: BigNumberish,
    gluePointer: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  "join(bytes16[])"(a: BytesLike[], overrides?: CallOverrides): Promise<string>;

  "join(bytes[])"(a: BytesLike[], overrides?: CallOverrides): Promise<string>;

  "join(bytes4[])"(a: BytesLike[], overrides?: CallOverrides): Promise<string>;

  "join(bytes[],bytes)"(
    a: BytesLike[],
    glue: BytesLike,
    overrides?: CallOverrides,
  ): Promise<string>;

  "join(bytes32[])"(a: BytesLike[], overrides?: CallOverrides): Promise<string>;

  "join(bytes3[])"(a: BytesLike[], overrides?: CallOverrides): Promise<string>;

  "join(bytes8[])"(a: BytesLike[], overrides?: CallOverrides): Promise<string>;

  "join(string[])"(a: string[], overrides?: CallOverrides): Promise<string>;

  "join(bytes2[])"(a: BytesLike[], overrides?: CallOverrides): Promise<string>;

  "join(uint16[])"(
    a: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<string>;

  "join(string[],string)"(
    a: string[],
    glue: string,
    overrides?: CallOverrides,
  ): Promise<string>;

  callStatic: {
    _joinReferenceType(
      inputPointer: BigNumberish,
      gluePointer: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(bytes16[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(bytes[])"(a: BytesLike[], overrides?: CallOverrides): Promise<string>;

    "join(bytes4[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(bytes[],bytes)"(
      a: BytesLike[],
      glue: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(bytes32[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(bytes3[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(bytes8[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(string[])"(a: string[], overrides?: CallOverrides): Promise<string>;

    "join(bytes2[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(uint16[])"(
      a: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<string>;

    "join(string[],string)"(
      a: string[],
      glue: string,
      overrides?: CallOverrides,
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _joinReferenceType(
      inputPointer: BigNumberish,
      gluePointer: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(bytes16[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(bytes[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(bytes4[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(bytes[],bytes)"(
      a: BytesLike[],
      glue: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(bytes32[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(bytes3[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(bytes8[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(string[])"(
      a: string[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(bytes2[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(uint16[])"(
      a: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "join(string[],string)"(
      a: string[],
      glue: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _joinReferenceType(
      inputPointer: BigNumberish,
      gluePointer: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(bytes16[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(bytes[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(bytes4[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(bytes[],bytes)"(
      a: BytesLike[],
      glue: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(bytes32[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(bytes3[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(bytes8[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(string[])"(
      a: string[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(bytes2[])"(
      a: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(uint16[])"(
      a: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "join(string[],string)"(
      a: string[],
      glue: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}

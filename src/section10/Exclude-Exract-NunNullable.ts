export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// 除外
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
// 関数型を除外
type TypeEcludeingFunction = Exclude<SomeTypes, Function>;

// 抽出
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// null, undefindedを除外する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>



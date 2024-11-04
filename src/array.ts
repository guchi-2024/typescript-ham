export{};

// 基本　配列型
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["dog", "cat", "bird"]

// 非推奨　配列型
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ["Tokyo", "Kyoto", "Nara"]

// 2次元配列
let hairetsu: number[][] = [
  [50, 100],
  [150, 200]
];

// 配列内の要素の型が異なる
let hairetsu2: (string | number | boolean)[] = [1, "Japan", true];

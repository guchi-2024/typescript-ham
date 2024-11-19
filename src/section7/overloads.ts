export{};

// オーバーロードとは、シグネチャ関数を使って型の条件を定義することで
// その関数の型が担保される。

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  }
  else {
    return value + value;
  }
}

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));





function increment(val: string | number, added?: number) {
  if ( typeof val === "string") {
    return "NaN";
  } else if (typeof val === "number") {
    if (typeof added !== "undefined") {
      return val + added;
    }
    return ++val;
  }
}

console.log(increment("1"));
console.log(increment(1));
console.log(increment(1, 2));

// 第２引数のaddedが存在する場合はnumber型なのでstring型はエラーになる
// console.log(increment(1, "2"));
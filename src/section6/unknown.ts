
export {};

const kansu = (): number => 43;

// 2つ変数に対してany型とunknown型に分ける
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();



// any型はエラーが発生しないがunknown型はエラーが発生する
let someAny = numberAny + 10;
// let someUnknown = numberUnknown + 10;

console.log(typeof numberUnknown)






// 型ガード: unknown型に条件を設定してtrueである時、その型を有効とする。
if (typeof numberUnknown === 'number') {
  let someUnknown = numberUnknown + 10;
  console.log(someUnknown);
}




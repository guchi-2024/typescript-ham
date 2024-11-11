export{};
//  void型は関数の返り値の型として使われることを想定しており、
// 「なにも返さない」ことを表す型です。
function returnNothing(): void {
  console.log("I don't return anything");
  return;
}

console.log(returnNothing());

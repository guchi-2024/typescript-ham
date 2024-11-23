export{}

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更でない
//   * 参照できる
// * secretNumber
//  *　個人番号
//  *　初期化に設定
//  *　途中で変更できる
//  *　参照できない


class MyNumberCard {
  //変数のownerとget owner()の名称が重複するので変数のownerを_ownerに書き換える
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `sevretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 12345);
// card.owner ='Ham';
console.log(card.owner);
// card._secretNumber;

console.log(card.debugPrint());
card.secretNumber = 11111;
console.log(card.debugPrint());


export{}

// readonly は読み取り専用

// 記述例１
class VisaCard {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner
  }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);

// 以下のように名前を変更すると、読み取り専用なのでtsエラーが発生する
// myVisaCard.owner = 'ベーコン'


// 記述例２
class MasterCard {
  constructor(public readonly owner2: string) {}
}

let myMasterCard = new MasterCard('ソーセージ');
console.log(myMasterCard.owner2)

// 記述例同様　tsエラー発生
// myMasterCard.owner2 = 'ベーコン'


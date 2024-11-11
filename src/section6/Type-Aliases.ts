export {};

// type Mojireruにすることで、string型に別名を持たせる
// 注意！　別名をつける時は、頭文字は大文字
type Mojiretu = string;

const fooString: string = 'Hello' 

const fooMojitetsu: Mojiretu = 'Hello'

const example1 = {
  name: 'Ham',
  age: 43,
  from: 'Japan'
}

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 43,
}


type Profile2 = typeof example1;
// 上記の設定することで、type Profile2は、tyoeof example1の型推論を参照

const example3: Profile2 = {
  name: 'Mike',
  age: 20,
  from: 'America'
}

// 以下のように型が合わないとtsエラーが発生
// const example3: Profile2 = {
//   name: 'Mike',
//   age: 20,
// }
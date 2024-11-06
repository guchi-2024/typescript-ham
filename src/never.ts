export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({result});
} catch(error) {
  console.log({error});
}

let foo: void = undefined;
// let bar: never = undefined;　←tsエラーになる。
// never型はundefinedもしくはnullを返せない。

let bar2: never = error('only me');
// never型で返せるのは唯一error関数だけである。
export{} ;

// tuple型配列のインデックス要素の値に型をつける

// tuple型でない型　→要素順番に関係なく型に一致する
let profile: (string | number)[] = ['Ham', 43];
profile = [43, 'Ham'];

// tuplel型
let profile2: [string, number] = ['Ham', 43]

// インデックス要素による型が一致しないためエラーになる
// profile2 = [43, 'Ham']

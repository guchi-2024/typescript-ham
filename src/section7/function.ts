export{};

// function

// 型が無い場合
// function bmi(height,weight) {
//   return weight/(height * height)
// };

// 型をつける
function bmi(height: number, weight: number): number {
  return weight/(height * height)
};

console.log("bmi:" + bmi(1.78, 86));



// 無名関数

// 型が無い場合
// let bmi2 = (height,weight) = function {
//   return weight/(height * height)
// }
let bmi2: (height: number, weight: number) => number = function(
  height: number, 
  weight: number
  ): number {
  return weight/(height * height)
};

console.log("bmi2:" + bmi2(1.78, 86));




// アロー関数

// 型が無い場合
// let bmi3 = (height,weight) => weight/(height * height)

let bmi3: (height: number, weight: number) => number = (
  height: number, 
  weight: number
  ): number => 
  weight/(height * height)


console.log("bmi3:" + bmi3(1.78, 86));

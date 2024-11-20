export {}

class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string
;  
  // constructorにはてreturnしないので戻り値に型をつける必要はない。
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}


class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

let Taro = new Person('Taro', 30, 'Japan');
console.log(Taro.profile());
console.log(Taro.name);
// console.log(Taro.age);
// let Hanako = new Person();
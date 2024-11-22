export{}

class Person {

  constructor(public name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }
}

const me = new Person('はむさん', 43);
console.log(me);

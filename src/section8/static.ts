export {}

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Taro';
  static lastName: string = 'Tanaka';

  static work() {
    return `${this.firstName}! Are you interested in TypeScript?`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());


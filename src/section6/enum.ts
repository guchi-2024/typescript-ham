export{};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.December);

enum Months {
  NextYearJanuary = 10
}

console.log(Months.January);
console.log(Months.December);
console.log(Months.NextYearJanuary);


enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000', 
  BLUE = '0000FF',
  BLACK = '#000000'
}

enum COLORS {
  YELLOW = '#FFFF00'
}

let green = COLORS.GREEN;
console.log({green});

COLORS.YELLOW;



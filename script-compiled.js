'use strict';

//exercise 1
var hello = 'Hello';
var world = 'world';

console.log(hello + ' ' + world);

//exersice 2
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

console.log(multiply(5, 2));
console.log(multiply(2));

//exercise 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;
  args.forEach(function (arg) {
    sum += arg;
  });
  return sum / args.length;
};

console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

//exercise 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var averageOfGrades = function averageOfGrades(grades) {
  var sum = 0;
  grades.forEach(function (grade) {
    sum += grade;
  });
  return sum / grades.length;
};
console.log(averageOfGrades(grades));

//exercise 5
var names = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = names[2],
    lastname = names[4];


console.log(firstname + ' ' + lastname);

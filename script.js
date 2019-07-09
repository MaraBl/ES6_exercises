//exercise 1
const hello= 'Hello';
const world= 'world';

console.log(`${hello} ${world}`);


//exersice 2
const multiply = (x, y=1) => x*y 

console.log(multiply(5,2));
console.log(multiply(2));


//exercise 3
const average = (...args) => {
    let sum = 0;
    args.forEach(arg => {
    sum+=arg;
    }) 
    return sum/args.length;
}

console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

//exercise 4
 const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

 let averageOfGrades = (grades) => {
    let sum = 0;
    grades.forEach(grade => {
    sum+=grade;
    }) 
    return sum/grades.length;
 }
 console.log(averageOfGrades(grades));

 //exercise 5
 const names = [1, 4, 'Iwona', false, 'Nowak']
 const [, , firstname, ,lastname] = names;

 console.log(`${firstname} ${lastname}`);
// Activity - 1
// Task 1: 
const func = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`);
}
func("Sonia", 19);
// Hello Sonia, you are 19 years old


// Task 2: 
let string = ` multi-line string`;
console.log(string);

// multi-line string

// Activity - 2
// Task 3: 
const add = (arr) => {
    let [a, b, ...rest] = arr
    console.log(a + b);
}
add([4, 3, 1]);
// 7

// Task 4: 
const object = (obj) => {
    const {name, greet} = obj;
    console.log(name, greet);
}
object({name: "Sonia", greet: "wow!"});
// Sonia wow!

// Activity - 3
// Task 5: 
let oldArray = [2,5, 3, 7];
let newArray = [...oldArray, 4];
console.log(newArray);
// [2, 5, 3, 7, 4]

// Task 6: 
const str = (...rest) => {
    let sum = rest.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}
str(5,4,6,7);
// 22

//Activity - 4
// Task 7:
const product = (a, b = 1) => {
    return a * b;
}
console.log(product(2, 2));
console.log(product(13,1));
// 4
// 13

// Actvity - 5
// Task 8 :
const key1="matter of sorrow";
const obj= {
    year: 2024,
    status: "mass conversion",
    effect: "condition of disbelief between people ",
    [key1]: "a fear is generating",
    call() {
        console.log(`${this.year} was a year with ${this.status}, resulting in ${this.effect}`);
    }
}
obj.call();
// 2024 was a year with mass conversion, resulting in condition of disbelief between people 

console.log(obj);
// {
//   year: 2024,
// status: 'mass conversion',
// effect: 'condition of disbelief between people ',
// 'matter of sorrow': 'a fear is generating',
// call: [Function: call]
// }
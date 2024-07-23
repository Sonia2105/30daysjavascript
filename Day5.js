// Activity -1 Function Declaration 

// Task - 1

function EvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let num = 21;
let output = EvenOrOdd(num);
console.log(`The number ${num} is ${output}.`); // The number 21 is odd

// Task - 2

function square(num1){
    return num1*num1;
}
let num1 =4;
let output1 = square(num1);
console.log(`square of the number ${num1} is ${output1}.`); // Square of the number 4 is 16

// Activity - 2

// Task - 3

function maxOfTwoNumbers(a,b){
    return (a>b)?a:b;
}
let a = 21;
let b = 34;
let output3 = maxOfTwoNumbers(a,b);
console.log(` Max of ${a} and ${b} is ${output3}`); // Max of 21 and 34 is 34

// Task - 4
 function concatenation(str1,str2){
    let result = str1+str2;
    console.log(result); // Hello, My name is Sonia
 }
 let str1 = "Hello, ";
 let str2 = "My name is Sonia";
 concatenation(str1,str2);

//  Activity - 3 - Arrow Function

// Task - 5
const sum = (c,d) => {
   console.log(c+d); // Output : 7
};
let c = 3;
let d = 4;
sum(c,d);

// Task -6 

const characterPresent = (str,char) => {
    ;
    console.log(`Is the specific character present - ${str.includes(char)}`); // is the specific code present - True

};
let str= "What! a beautiful day";
let char = "f";
 characterPresent(str,char);

//  Activity - 4 - Function Parameters and Default Values

// Task - 7 

function multiply(a,b=2){
     console.log(`Multiplication of these two numbers is ${a*b}`);
}
let num2 = 34;
let num3 = 1;
multiply(num2,num3); // Multiplication of these numbers is 34
multiply(num2); // Multiplication of these numbers is 68

// Task - 8 

function greetingMessage(Name,Age = 19){
    console.log(`Hey ${Name}, you are ${Age} enjoy your life to the fullest `); // hey Priya , you are 19 enjoy your life to the fullest
}
let name = "Priya";
greetingMessage(name);

// Activity - 5 Higher order function 

// Task - 9
function executeManyTimes(func,times,param){
    for(let i =0;i<num4;i++){
        func(param);
    }
}

function multiply1(num){
    console.log(num*num);
}
 let num4 =3;
 let times = 3;

 executeManyTimes(multiply1,times,num4);

//  Task - 10
function applyMultipleTimes(func1,func2,value){
    const res1 = func1(value);
     return func2(res1); // Output : 64
}
const double = x => x*2;
const square1 = x => x*x;

let value = 4;
let res = applyMultipleTimes(double,square1,value);
console.log(res);


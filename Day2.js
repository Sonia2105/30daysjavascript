 // Activity 1 :Arithmetic Operators

// Task 1
let a = 6;
let b = 2;
console.log(a+b); // output : 8

// Task 2

console.log(a-b); // output:4

//Task 3

console.log(a*b); // output : 12

//Task 4

console.log(a/b); // output : 3

//Task 5

console.log(a%b); // output : 0

// Activity 2

//Task 6
let x=9;
x+=10;
console.log(x); // 19

//Task 7
let y=34;
y-=12;
console.log(y); // 22

// Activity 3 - comparison operators

//Task 8
console.log(36>12); // true
console.log(37<12); // false

//Task 9
console.log(21>=21); // true
console.log(17<=12); // false

//Task 10
let x1=12;
let x2="12";
console.log(x1==x2);  // true
console.log(x1===x2); // false

// activity 4 - logical operators

//Task 11
let i=56;
while(i>0 && i%2==0)
{
    i=i/2;
}
console.log(i); // 7

//Task 12
let age=20;
if(age==18 || age>18)
{
    console.log("eligible to vote") // output : eligible to vote
}
else
{
    console.log("not eligible to vote");
}

//Task 13
if(!false)
{
    console.log("stmt executed"); // output : stmt executed
}

// activity 5 - ternary operators

//Task 14
let num=-7;
console.log(num>=0?"positive":"negative"); // output : negative

// FEATURE REQUEST
// task -1 Arithmetic operator related

let c = 21;

console.log(c+2); // output:23
console.log(c-3); // output:18
console.log(c*2); // output:42
console.log(c/7); // output:3
console.log(c%3); // output:0
console.log(c++); // output:21
console.log(c--); // output:22
console.log(c**2); // output:441

// task -2 Comparsion and logical operator related

console.log(5==5); // output : true 
console.log(5!=5); // output : false
console.log(5==='5'); // output : false
console.log(3>5); // output : false
console.log(3<9); // output :true

console.log(3>5 && 4<9); // output : false
console.log(3>5 || 9>4); // output : true
console.log(!(a==4)); // output : true

// task -3 ternary operator related

c>18?console.log("greater") : console.log("smaller"); // output : greater 
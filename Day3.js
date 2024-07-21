// Activity - 1 If-else statement

// Task - 1
    let number = 10;
    let result
    if (number > 0) {
        result = "positive";
    } else if (number < 0) {
        result = "negative";
    } else {
        result = "zero";
    }
    
    console.log(`The number ${number} is ${result} `); // output : The number 10 is positive 
// Task -2
    let age = 20;  
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }

 // output : You are eligible to vote

// Activity -2 nested if-else

// Task 3
function Max(a, b, c) {
    let max;
    
    if (a >= b) {
        if (a >= c) {
            max = a;
        } else {
            max = c;
        }
    } else {
        if (b >= c) {
            max = b;
        } else {
            max = c;
        }
    }
    
    console.log(`The maximum of the three numbers is: ${max} `);
}


let num1 = 3;  
let num2 = 5;
let num3 = 4;

Max(num1,num2,num3);// output : The maximum of the three numbers is : 5

// Activity - 3

// Task -4 

    let Number = 3;
    let dayName;
    switch (Number) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }

    console.log(dayName); // output : Tuesday 

// Task - 5
    let score = 85;
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        case (score >= 60 && score < 70):
            grade = "D";
            break;
        default:
            grade = "Fail";
    }

    console.log(`The grade for a score is: ${grade}`); // Output : The grade for a score is : B 

//  Activity - 4 Conditional Operator 

// Task - 6
    
    let number1 = 17;
    const result1 = (number1 % 2 === 0) ? "even" : "odd";
    console.log(`The number is ${result1}`); // The number is odd



// Activity - 5 Combining Conditions

//  Task - 7

let year = 2024;

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("Leap year");
        }
        else{
            console.log("Not a Leap year");
        }
    }
    else{
        console.log("Leap year");
    }
}
else{
    console.log("Not a Leap year");
}   // Output: Leap year


// Problem 1
var createCounter = function(init) {
    let temp = init;
    const obj = {
        increment(){
            init++;
            return init;
        },
        decrement(){
            init--;
            return init;
        },
        reset(){
            init = temp;
            return init;
        }
    }
    return obj;
};


// Problem 2
var map = function(arr, fn) {
    let returnedArray = [];
    for(let i = 0; i<arr.length ; i++){
        returnedArray.push(fn(arr[i] , i)); 
    }
    return returnedArray;
};
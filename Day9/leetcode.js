// Ques -1 

var createHelloWorld = function(){
    return function(...args){
        return("Hello World");
    }
};

// Ques - 2

var createCounter = function(n){
     return function(){
        return n++;
     };

};
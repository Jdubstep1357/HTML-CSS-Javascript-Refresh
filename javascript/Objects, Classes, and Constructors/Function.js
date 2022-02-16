// function is bundled up code that one can call and add to an object
// FUNCTIONS ARE A SPECIAL KIND OF OBJECT
function add2nums(x,y) {
    return x + y;
}

var result = add2nums(2,3);
console.log(result);


/* 
FUNCTIONS ARE FIRST CLASS VALUES
1. Assign a function to a variable
2. Store a function as a value in an array or object
3. Pass a function to a function
*/
// Create a function that will take any number, divide the number by any number, 
//and the output should be how many times the number got divided as well as the modulus of the 
// numbers you are dividing. Make this program ONLY using addition and subtraction 
// arithmetic operators. You CANNOT use modulus, multiplication, division etc. 
// All you can use is addition and subtraction. If I try to divide by zero, I should get an error 
// that says: “Error: Cannot Divide By Zero” Don’t worry about accounting for negative numbers. 
// Assume that only positive integers will be used. I want this function to return: “Result: 
// [number] ; Remainder: [remainder]” . Use proper string interpolation or chaining to place 
// your variables in this string. 

function getValues(){
    let dividend = prompt("Please enter a dividend: ");
    let divisor = prompt("Please enter a divisor");
    getNumTimesDivided(dividend, divisor);
}

function getNumTimesDivided(dividend, divisor){  
    console.log("inside numt")
    let numTimesDivided = 0;
    if (divisor === 0){
        alert("Error: Cannot Divide By Zero");
    } else if (dividend !== 0){
        while(dividend > 0){
        console.log("inside while")
      //
       // 18
       //18 - 5
       //13 - 5
       //8 -5 
        let result = dividend - divisor;
       // dividend = 13
       //dividend = 8
       //dividend = 3
        dividend = result;
        console.log("result: " + result);
        console.log("dividend: " + dividend);
        numTimesDivided++
        console.log("numX= " +numTimesDivided);
        }  
        getRemainder(numTimesDivided, dividend);
    // } else if (){

    // } 
    }else {
        getRemainder(numTimesDivided, dividend);
    }
    
    
}

function getRemainder(numTimesDivided, dividend){
    console.log("outside while");
    let remainder = null;
     if (dividend === 0){
    console.log("inside if")
    remainder = 0;
    console.log("Result: " + numTimesDivided + "; Remainder: " + remainder)
    } 
    if (dividend > 0){
        remainder = dividend;
        console.log("Result: " + numTimesDivided + "; Remainder: " + remainder)
    }
}

getValues();
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
    getRemainder(dividend, divisor);
}

function getRemainder(dividend, divisor){
    while (dividend !== divisor){
        if (divisor === 0){
            alert("Error: Cannot Divide By Zero")
            break;
        }
        let result = dividend - divisor;
        dividend = result;
        console.log(dividend)
        if (dividend === result){
            let remainder = dividend - divisor;
            console.log("Result: " + dividend + "; Remainder: " + remainder)
        }
    }
}

getValues();
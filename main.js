//A function to add two values together. 
//This function needs to define two parameters - the two numbers that you want to add together.
//In the adding function, add the values of the two parameters and return the result

const addMinion = (num1, num2) => {
    const sum = num1 + num2
    return sum
}


//A function to multiply a single number by 2. 
//This function takes one parameter - the number you want to multiply by 2.
//In the multiplication function, multiply the value of the single parameter by 2 and return the result.
const multiplyMinion = (number) => {
    const product = number * 2
    return product
}


//Invoke the adding function, provide two values as arguments, 
//and the store what gets returned into a variable.

minionSum = addMinion(4, 14)
// console.log(minionSum)


// Then invoke the multiplication function and provide the variable from the previous step as the argument. 
// Store the result into a variable.
minionMultiply = multiplyMinion(minionSum)

// Use console.log() to output the end result of the multiplication function.
console.log(minionMultiply)

// As an example, if you pass 4 and 14 to the first function, then the final output should be 36.
//works!!!

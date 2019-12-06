//Counting sheep

const countSheep = function(sheep) {
    if (sheep === 0) {
        console.log('All sheep jumped over the fence');
    } else {
        console.log(`${sheep}: Another sheep jumped over the fence`)
    
        countSheep(sheep - 1)
    }
}

const sheep = 3;
console.log(countSheep(sheep))

// Power calculator

const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        return 'Exponent must be greater than or equal to 0'
    }

    if (exponent = 0) {
        return 1
    }

    if (!Number.isInteger(base) || !Number.isInteger(exponent)) {
        return 'Both the base and exponent must be a valid integer'
    }

    if (exponent === 0) {
        return base
    } else {

        return ((base * base) + powerCalculator(base, exponent - 1))
    }
}

console.log(powerCalculator(10, 4))

//Reverse string 

const reverseString = function(string) {

    /* let stringArray = [];

    if (string.length === 1) {
        console.log(string)
    } else {
        const newString = (string.split(' ').slice(-1).join(' '))

        stringArray.push((string.split(' ').pop()))

        reverseString(newString)
    } */

    if (string === '') {
        return '';
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}

let string = 'The quick brown fox jumps over the lazy dog'


console.log(reverseString(string))


//Triangle number
const findTriangleNumber = function(n) {
    if (n <= 1) {
        return n
    } else {
        return n + findTriangleNumber(n-1)
    }
}

console.log(findTriangleNumber(5))

//String splitter
const stringSplitter = function(string) {

}



//Fibonacci
const fibonacci = function(n) {

    if (n <= 1) {
        return 1
    } else {
        return fibonacci(n - 1).toString() + fibonacci(n - 2).toString();
    }
}

console.log(fibonacci(7))

//Factorial
const factorial = function(n) {
    if (n === 1 ) {
        return n 
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(10))
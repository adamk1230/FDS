// Original factorial function
// factorial = number => {
//   let factorialNumber = 1;
//   for (let i =1, j = number + 1; i < j; i+=1){
//     factorialNumber *= i;
//   }
//   return (factorialNumber);
// }

// Factorial using recursion

fractorialArray = [];
factorial = number => {
  if (number === 0 || number === 1) {
    return fractorialArray[number] = 1;
  };
  return fractorialArray[number] = factorial(number -1) * number;
}

// Original digit sum function using string methods
// factorialDigitSum = number => {
//   let factoriaNumber = factorial(number).toString();
//   let fdsNumber = 0;

//   for (let i = 0, j = factoriaNumber.length; i < j; i+=1) {
//     fdsNumber += parseInt(factoriaNumber[i]);
//   }
//   return (fdsNumber);
// }

// Digit sum function using math methods
factorialDigitSum = number => {
  let sum = 0;
  let factorialNumber = factorial(number);
  while (factorialNumber) {
    sum += factorialNumber % 10;
    factorialNumber = Math.floor(factorialNumber / 10);
  }
  return sum;
}

module.exports = {
  factorial: factorial,
  factorialDigitSum: factorialDigitSum
}

// input = 10, expected output = 3628800
console.log(factorial(10));
// input = 10, expected output = 27
console.log(factorialDigitSum(10));

//  input = 4, expected output = 24
console.log(factorial(4));
// input = 4, expected output = 6
console.log(factorialDigitSum(4));

// input = 100, expected = 9.33262154439441e+157
console.log(factorial(100));
// input = 100, expected = 659?
console.log(factorialDigitSum(100));
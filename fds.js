//   Create a Github repository and commit to it often (it is helpful to see 
//   how you break down the work versus one commit at the end) 
//   2) While you are writing the application, create tests that verify your 
//   answer solves the solution
  
//   *Factorial Digit Sum*
  
//   *Goal:* 
//   Create an application to find the sum of the digits from factorial(100)
  
//   *Structure:* 
//   Our factorial function should exist in the form factorial(n) = n x (n - 1) 
//   x (n - 2) x ... x 3 x 2 x 1
  
//   *An example of factorial(10)* 
//   factorial(10) = 10 x 9 x 8 x ... x 3 x 2 x 1 = 3628800
  
//   *Sum of the factorial output digits* 
//   Calculate the sum of the output digits so that 3 + 6 + 2 + 8 + 8 + 0 + 0 = 
//   27

factorial = number => {
  let factorialNumber = 1;
  for (let i =1, j = number + 1; i < j; i+=1){
    factorialNumber *= i;
  }
  return (factorialNumber);
}

factorialDigitSum = number => {
  let factoriaNumber = factorial(number).toString();
  let fdsNumber = 0;

  for (let i = 0, j = factoriaNumber.length; i < j; i+=1) {
    fdsNumber += parseInt(factoriaNumber[i]);
  }
  return (fdsNumber);
}

console.log(factorial(10));
console.log(factorialDigitSum(10));
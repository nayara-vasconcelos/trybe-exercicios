let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1:

for (let i = 0; i < numbers.length; i +=1) {
  console.log(numbers[i]);
}

for (let number of numbers) {
  console.log(number);
}


// Exercício 2:

let sumWithFor = 0;

for (let i = 0; i < numbers.length; i +=1) {
  sumWithFor += numbers[i];
}

console.log(sumWithFor);


let sumWithForOf = 0;

for (let number of numbers) {
  sumWithForOf += number;
}

console.log(sumWithForOf);


// Exercício 3:

const arithmeticMean = sumWithFor/ numbers.length;
console.log(arithmeticMean);


// Exercício 4:

if (arithmeticMean > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}


// Exercício 5:

let highestNumberWithFor = numbers[0];

for (let i = 1; i < numbers.length; i +=1) {
  if (numbers[i] > highestNumberWithFor) {
    highestNumberWithFor = numbers[i];
  }
}

console.log(highestNumberWithFor);


let highestNumberWithForOf = numbers[0];

for (let number of numbers) {
  if (number > highestNumberWithForOf) {
    highestNumberWithForOf = number;
  }
}

console.log(highestNumberWithForOf);


// Exercício 6:

let totalOddNumbersWithFor = [];

for (let i = 0; i < numbers.length; i +=1) {
  if ((numbers[i] % 2) === 1) {
    totalOddNumbersWithFor.push(numbers[i]);
  }
}

if (totalOddNumbersWithFor.length > 0) {
  console.log(totalOddNumbersWithFor.length); // Total de números ímpares.
} else {
  console.log('nenhum valor ímpar encontrado');
}


let totalOddNumbersWithForOf = [];

for (let number of numbers) {
  if ((number % 2) === 1) {
    totalOddNumbersWithForOf.push(number);
  }
}

if (totalOddNumbersWithForOf.length > 0) {
  console.log(totalOddNumbersWithForOf.length); // Total de números ímpares.
} else {
  console.log('nenhum valor ímpar encontrado');
}


// Exercício 7:

let lowestNumberWithFor = numbers[0];

for (let i = 1; i < numbers.length; i +=1) {
  if (numbers[i] < lowestNumberWithFor) {
    lowestNumberWithFor = numbers[i];
  }
}

console.log(lowestNumberWithFor);


let lowestNumberWithForOf = numbers[0];

for (let number of numbers) {
  if (number < lowestNumberWithForOf) {
    lowestNumberWithForOf = number;
  }
}

console.log(lowestNumberWithForOf);


// Exercício 8:

let startingNumber = 1;
let limitNumber = 25;
let array = [];

for (let i = startingNumber; i <= limitNumber; i+= 1) {
  array.push(i);
}

console.log(array);


// Exercício 9:

let arrayDividedBy2WithFor = [];

for (let i = 0; i < array.length; i+= 1) {
  let div = (array[i] / 2);
arrayDividedBy2WithFor.push(div);
}

console.log(arrayDividedBy2WithFor);


let arrayDividedBy2WithForOf = [];

for (let number of array) {
  let div = (number / 2);
  arrayDividedBy2WithForOf.push(div);
}

console.log(arrayDividedBy2WithForOf);

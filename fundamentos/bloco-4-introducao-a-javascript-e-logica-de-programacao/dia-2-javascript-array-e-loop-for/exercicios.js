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

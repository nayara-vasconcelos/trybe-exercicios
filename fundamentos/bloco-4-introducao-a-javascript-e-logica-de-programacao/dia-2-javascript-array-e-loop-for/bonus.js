let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1: Ordenação crescente por bubble sort.


// Solução da plataforma:

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//       console.log(numbers);
//     }
//   }
// } 

for (let index1 = (numbers.length - 1); index1 > 0; index1 -= 1) {
  for (let index2 = 0; index2 < index1; index2 += 1) {
    if (numbers[index2] > numbers[index2 +1]) {
      let aux = numbers[index2];
      numbers[index2] = numbers[index2 + 1];
      numbers[index2 + 1] = aux;
      console.log(numbers);
    }
  }
}

console.log(numbers);

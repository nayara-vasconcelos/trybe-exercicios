const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const getAuthorBornIn = (year) => {
  const bookObject = books.find((book) => book.author.birthYear === year);
  const authorName = bookObject.author.name;
  return authorName;
}

console.log(getAuthorBornIn(1947));


//2 - Retorne o nome do livro de menor nome.
const getSmallestNameOf = (array) => {
  let smallestName = array[0].name;
  
  array.forEach((e) => {
    if (e.name.length < smallestName.length) {
    smallestName = e.name;
    }
  });

  return smallestName;
}

console.log(getSmallestNameOf(books));


// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const getNameOfBookWith = (charsNumber) => {
  const bookObject = books.find((book) => book.name.length === charsNumber);
  return (bookObject ? bookObject.name : 'Livro não encontrado');
}

console.log(getNameOfBookWith(26));


// 4 - Ordene os livros por data de lançamento em ordem decrescente.
const booksOrderedByReleaseYearDesc = () => {
  books.sort((a, b) => {
    if (a.releaseYear < b.releaseYear) {
      return 1;
    }
    if (a.releaseYear > b.releaseYear) {
      return -1;
    }
    return 0;
  });
}

booksOrderedByReleaseYearDesc()
console.log(books);


// 5 - Faça uma função que retorne true se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
const everyoneWasBornBetween = (inicialYear, finalYear) => {
  const everyoneWasBornBetweenYears = books.every((book) => {
    return (book.author.birthYear >= inicialYear) && (book.author.birthYear <= finalYear);
  });
  return everyoneWasBornBetweenYears;
}

console.log(everyoneWasBornBetween(1901, 2000)); // Século XX: 1901 - 2000

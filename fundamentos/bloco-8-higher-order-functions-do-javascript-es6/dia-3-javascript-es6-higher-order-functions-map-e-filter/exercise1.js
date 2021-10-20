const books = [{
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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map
const formattedBookNames = () => {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
};

console.log(formattedBookNames());


// 2 - Construa um array de objetos a partir do array de livros.
// Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro,
// e uma propriedade age com a idade dessa pessoa quando o livro foi lançado.
// O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha
// considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort
const nameAndAge = () => {
  const nameAndAgeList = books.map((book) => {
      return {
        age: (book.releaseYear - book.author.birthYear),
        author: book.author.name
      };
    })
    .sort((a, b) => {
      // Aqui o sort() organiza em ordem crescente o retorno do map de acordo com a chaves do objeto.
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    });

  return nameAndAgeList;
};

console.log(nameAndAge());


// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;
const fantasyOrScienceFiction = () => {
  const sciFiAndFantasy = books.filter((book) => {
    return ((book.genre === 'Ficção Científica') ||
      (book.genre === 'Fantasia'));
  });

  return sciFiAndFantasy;
};

console.log(fantasyOrScienceFiction());


// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
//Dica: use as funções filter e sort.
const oldBooksOrdered = (currentYear) => {
  const sortedOldBooksDesc = books.filter((book) => {
    return ((currentYear - book.releaseYear) > 60);
  })
  .sort((a, b) => {
    // Aqui o sort() organiza em ordem crescente o retorno do filter de acordo com a chaves do objeto. Livro mais velho -> Menor releaseYear.
    if (a.releaseYear > b.releaseYear) {
      return 1;
    }
    if (a.releaseYear < b.releaseYear) {
      return -1;
    }
    return 0;
  });

  return sortedOldBooksDesc;
};

console.log(oldBooksOrdered(2021));


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const fantasyOrScienceFictionAuthors = () => {
  const sciFiAndFantasyAuthors = fantasyOrScienceFiction()
    .map((book) => `${book.author.name}`)
    .sort();

  return sciFiAndFantasyAuthors;
};

console.log(fantasyOrScienceFictionAuthors());


// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const oldBooks = (year) => {
  const oldBooksNameList = oldBooksOrdered(year)
    .map((book) => `${book.name}`);
  
    return oldBooksNameList;
};

console.log(oldBooks(2021));

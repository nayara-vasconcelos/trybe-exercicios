// Programa 6: Recebe o nome de uma peça de xadrez e retorna os movimentos que ela faz.

let chessPiece = 'Queen';

let chessPieceInLowerCase = chessPiece.toLowerCase();
// Método que converte string para letras minúsculas.
// Ref: https://www.w3schools.com/js/js_string_methods.asp

switch (chessPieceInLowerCase) {
    case 'peão':
    case 'pawn':
        console.log('O peão movimenta-se apenas uma casa para frente, mas pode avançar duas casas no seu primeiro movimento do jogo.');
        break;
    case 'torre':
    case 'rook':
        console.log('A torre movimenta-se pela vertical ou horizontal, quantas casas quiser, sem pular outras peças.');
        break;
    case 'cavalo':
    case 'knight':
        console.log('O movimento do cavalo é em forma de “L”, ou seja, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
        break;
    case 'bispo':
    case 'bishop':
        console.log('O bispo move-se ao longo da diagonal, quantas casas quiser, sem pular outras peças.');
        break;
    case 'rainha':
    case 'queen':
        console.log('A rainha move-se ao longo da horizontal, vertical e diagonais, sem pular outras peças.');
        break;
    case 'rei':
    case 'king':
        console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
        break;
    default:
        console.log('Erro: Peça inválida!');
}
// Link de ref.: https://www.ludijogos.com/multiplayer/xadrez/regras/

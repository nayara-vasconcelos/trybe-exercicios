/**
 * Programa 10:
 * Inicia com duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcula quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
 * Atente que, sobre o custo do produto, incide um imposto de 20%.
 * O programa também emite uma mensagem de erro e encerra caso algum dos seus valores de entrada seja menor que zero.
 * O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
 * valorCustoTotal = valorCusto + impostoSobreOCusto
 * lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

const productCost = 50;
const salesPrice = 0;

if ((productCost >= 0) && (salesPrice >= 0)) {
    const productTotalCost = productCost * 1.2; // productCost + 20%
    const totalProfit = ((salesPrice - productTotalCost) * 1000);
    console.log(`O lucro sobre a venda de mil produtos é de R$ ${totalProfit}`);
} else {
    console.log('Erro: O custo do produto ou o valor de venda do produta devem ter valores positivos.')
}

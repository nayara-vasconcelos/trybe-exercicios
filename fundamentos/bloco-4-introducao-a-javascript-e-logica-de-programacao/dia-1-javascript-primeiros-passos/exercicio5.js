// Programa 5: Verifica se é um triângulo.
const degreeAngleA = 60;
const degreeAngleB = 30;
const degreeAngleC = 90

const positiveAngles = ((degreeAngleA > 0) && (degreeAngleB > 0) && (degreeAngleC > 0));
const sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

if (positiveAngles) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Erro: Ângulo inválido!');
}

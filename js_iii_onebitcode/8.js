let SimpleAverage = (...numbers) => {
  let initialValue = 0;

  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  let average = sum / numbers.length;

  console.log(
    `Calculo de Média Aritmética Simples
    Suas Notas: ( ${numbers} )
    Sua Média: ( ${average.toFixed(1)} )`
  );
};
SimpleAverage(8, 6.2, 7);

let weightedAverage =;

weightedAverage({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 })

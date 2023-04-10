let calculateSimpleAverage = (...numbers) => {
  let initialValue = 0;

  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  let average = sum / numbers.length;

  console.log(`
Cálculo de Média Aritmética Simples
Suas Notas: ( ${numbers} )
Sua Média: ( ${average.toFixed(1)} )
`);
};
calculateSimpleAverage(8, 6.2, 7);

let calculateWeightedAverage = (...objects) => {
  let sum = 0;
  let pValue = 0;
  let allN = "";
  let allP = "";

  for (let i = 0; i < objects.length; i++) {
    let multiplication = objects[i].n * objects[i].p;

    sum += multiplication;

    pValue += objects[i].p;

    if (i === objects.length - 1) {
      allN += objects[i].n;
      allP += objects[i].p;
    } else {
      allN += objects[i].n + ", ";
      allP += objects[i].p + ", ";
    }
  }

  let average = sum / pValue;

  console.log(`
Cálculo de Média Aritmética Ponderada
Números informados: N: ( ${allN} ) P: ( ${allP} )
Média: ( ${average.toFixed(2)} )
`);
};
calculateWeightedAverage({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 });

let calculateMedian = (...numbers) => {};

/*
mediana(2, 4, 5, 7, 42, 99) === 6
porque 5 e 7 estão juntos no centro da sequência e
media(5, 7) === 6

mediana(15, 14, 8, 7, 3) === 8
porque 8 está no centro da sequência
 */

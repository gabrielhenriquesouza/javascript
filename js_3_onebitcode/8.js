//----------------------------------------------------------------------------

let calculateSimpleAverage = (...numbers) => {
  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let average = sum / numbers.length;

  console.log(`
Cálculo de Média Aritmética Simples
Suas Notas: ( ${numbers} )
Sua Média: ( ${average.toFixed(1)} )
`);
};
calculateSimpleAverage(8, 6.2, 7);

//----------------------------------------------------------------------------

const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};
console.log(
  `
Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}
  `
);

//----------------------------------------------------------------------------

let calculateMedian = (...numbers) => {
  let median = 0;

  if (numbers.length % 2 == 0) {
    median =
      (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
  } else {
    median = numbers[numbers.length / 2 - 0.5];
  }

  console.log(`
Cálculo de Mediana
Números informados: ( ${numbers} )
Mediana: ( ${median} )
`);
};
calculateMedian(2, 4, 5, 7, 42, 99);
calculateMedian(15, 14, 8, 7, 3);

//----------------------------------------------------------------------------

let calculateMode = (...numbers) => {
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let ind = i - 1; ind !== -1; ind--) {
      if (numbers[i] == numbers[ind]) {
        counter += 1;
      }
    }
  }
  console.log(counter);
};

calculateMode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4);
//para cada número tenho que ver quantas vezes ele se repetiu nos numeros anterio

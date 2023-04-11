//----------------------------------------------------------------------------

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

//----------------------------------------------------------------------------

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

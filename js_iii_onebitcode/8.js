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

let weightedAverage = (...objects) => {
  let sum = 0;
  let pValue = 0;

  for (let i = 0; i < objects.length; i++) {
    let multiplication = objects[i].n * objects[i].p;

    sum += multiplication;

    pValue += objects[i].p;
  }

  let average = sum / pValue;

  console.log(`Calculo de Média Aritmética Ponderada
  `);
};

weightedAverage({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 });

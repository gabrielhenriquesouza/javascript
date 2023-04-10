/*let SimpleAverage = (...numbers) => {
  console.log(numbers);
  let initialValue = 0
  let sum = numbers.reduce(accumulator, currentValue) => accumulator + currentValue, initialValue;
  console.log(numbers)
};

SimpleAverage(10, 10, 10);
*/

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

const App = require("./App");

App.createUser("izaac@email", "Izaac");
App.createUser("lucas@email", "Lucas");
App.createUser("gabriel@email", "Gabriel");

App.deposit("izaac@email", 100);

App.transfer("izaac@email", "lucas@email", 20);

App.changeLoanFee(10);
App.loan("gabriel@email", 2000, 24);

console.log(App.findUser("izaac@email"));
console.log(App.findUser("izaac@email").account);
console.log(App.findUser("lucas@email"));
console.log(App.findUser("lucas@email").account);
console.log(App.findUser("gabriel@email"));
console.log(App.findUser("gabriel@email").account.loans[0].installments);

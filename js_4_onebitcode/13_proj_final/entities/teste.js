const App = require("./App");

App.criarUsuario("gabriel@gmail", "Gabriel");
App.criarUsuario("lucas@gmail", "Lucas");
App.criarUsuario("fernanda@gmail", "Fernanda");
App.mostrarUsuarios();

App.deposito("gabriel@gmail", 100);
/*
App.deposit("isaac@email.com", 100)

App.transfer("isaac@email.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 2000, 24)
 */

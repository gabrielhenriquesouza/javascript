class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(emailDigited, passwordDigited) {
    if (emailDigited === this.email && passwordDigited === this.password) {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Falha ao entrar. Tente novamente!");
    }
  }
}

//Dados do usuário
const user1 = new User("Gabriel Henrique", "gabriel123@gmail.com", "123456");
console.log(user1);

//Verifica se os dados do login estão certos
const login = user1.login("gabriel123@gmail.com", "123456");
console.log(login);

class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(amount) {
    this.inStock += amount;
  }
  calculateDiscount(discount) {
    this.price = this.price - (discount / 100) * this.price;
  }
}

//Cria o produto
const arroz = new Product("Arroz", "Arroz Kibom", "20");
console.log(arroz);

//Adiciona estoque
arroz.addToStock(20);
console.log(arroz);

//Calcula desconto
arroz.calculateDiscount(30);
console.log(arroz);

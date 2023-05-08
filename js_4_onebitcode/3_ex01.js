/* class User {
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

const user1 = new User("Gabriel Henrique", "gabriel123@gmail.com", "123456");
console.log(user1);

const login = user1.login("gabriel123@gmail.com", "123456");
console.log(login);
*/

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
    discountedPrice = (discount / 100) * discount;
  }
}

const arroz = new Product("Arroz", "Arroz Kibom", "$20");
console.log(arroz);

arroz.addToStock(20);
console.log(arroz);

arroz.calculateDiscount(30);

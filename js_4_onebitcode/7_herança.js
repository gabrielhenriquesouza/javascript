class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

class Apartment extends Property {}

const land = new Property(200, 50000);

const someHouse = new House(120, 100000);

console.log(land);
console.log(someHouse);
console.log(someHouse.getPricePerSquareMeter());

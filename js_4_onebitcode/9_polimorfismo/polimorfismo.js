class Vehicle {
  move() {
    console.log("O veículo está se movendo");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronave está voando a ${speed} km/h`);
  }
}

const carro = new Car();
const navio = new Ship();
const nave = new Aircraft();

carro.move();
navio.move();
nave.move(123);

function start(vehicle) {
  console.log("Iniciando um veículo");
  vehicle.move();
}

start(carro);
start(navio);
start(nave);

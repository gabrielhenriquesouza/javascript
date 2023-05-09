const Address = require("./4_address");
const Person = require("./4_person");

const addr = new Address("7 de Setembro", 92, "Centro", "São Fidélis", "RJ");
const gabriel = new Person("Gabriel", addr);

console.log(gabriel);
console.log(gabriel.address.fullAddress());

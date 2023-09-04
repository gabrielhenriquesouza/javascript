function phoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
}

console.log(phoneNumber("+55 (61) 9 9910-9836"));

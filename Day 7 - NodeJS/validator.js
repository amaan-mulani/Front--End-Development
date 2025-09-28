import validator from "validator";
let myData = "";
let myData1 = "Hello";
console.log(validator.isEmpty(myData));
console.log(validator.isEmpty(myData1));

let email = "amaan@gmail.com";
let email1="amaan.com";
console.log(validator.isEmail(email));
console.log(validator.isEmail(email1));
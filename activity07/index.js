import Customer from "./Customer.js";

/*
1. Crie quatro funções (somar, subtrair, dividir e multiplicar). 
Em seguida faça uma função chamada calcular(), essa função deve receber 
3 parâmetros, valor A, valor B e a função callback que será executada.
*/

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

/*
2. Crie uma classe Cliente, essa classe deve ter nome, telefone, 
renda e e-mail como atributos e um método verificarCredito(), 
esse método deve retornar uma promise que retorna: 
Crédito aprovado (renda > 2000) ou Crédito recusado (renda < 2000)
*/

const customer1 = new Customer("Jack", "19 97022-4950", 2100, "Jack@bol.com.br");

customer1.checkCredit().then(
    (result) => console.log(result)
).catch(
    (result) => console.log(result)
);

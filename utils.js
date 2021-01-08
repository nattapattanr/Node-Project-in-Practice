calculateVat = function calculateVat(money, vat) {
    return money*vat/100;
}

sayHello = function sayHello() {
    console.log('Hello');
}

module.exports = {
    calculateVat,
    sayHello
};
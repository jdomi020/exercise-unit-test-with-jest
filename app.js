const sum = (a,b) => {
    return a + b
};

console.log(sum(7,3));
 

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromDollarToYen = (dollar) => {
    return (dollar * oneEuroIs.JPY * .93)
}
console.log(fromDollarToYen(1));

const fromEuroToDollar = (euro) => {
    return (euro * oneEuroIs.USD)
}
console.log(fromEuroToDollar(1));

const fromYenToPound = (yen) => {
    return ((yen * 0.006) * oneEuroIs.GBP)
}
console.log(fromYenToPound(1));

module.exports = {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen}; 




function calculateDiscount(value, quantity, callback) {
    discount = callback(quantity);
    console.log(`Final price for each unit: $ ${(value*discount).toFixed(2)}`)
    console.log(`Final price for the batch: $ ${((value*quantity) * discount).toFixed(2)}` )
}

function quantityDiscount(qnt) {
    if (qnt >= 10) {
        return 0.9;
    } else if (qnt >= 5) {
        return 0.95;
    } else {
        return 1;
    }
}

calculateDiscount(12, 5, quantityDiscount);

const arrayPrint = [
    [5,10,12],
    [2,9,11],
    [15,8,6]
]

function biggerThan10(value) {
    return value >= 10;
}

arrayPrint.forEach((a, index) => {
    process.stdout.write(`Element ${index}: `);
    console.log(a.filter(biggerThan10));
})
const list = [10,12,15,35,40];
const list2 = [5,12,20,7,9];

function largerThanAvg(array = []) {
    const median = array.reduce((n1, n2) => n1 + n2, 0) / array.length;
    return array.filter(n => n > median);
}

function lowest(array = []) {
    return Math.min(...array);
}

function sum(array = []) {
    return array.reduce((n1, n2) => n1 + n2, 0);
}

function lowerThan20(array = []) {
    return array.filter(n1 => n1 < 20);
}

function separate(list = []) {
    const [first, ... rest] = list;
    return `[${first}] - [${rest}]`
}

console.log(separate(list2));


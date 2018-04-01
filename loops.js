console.log("BETWEEN -10 AND 19");
var num = -10
while (num < 19) {
    console.log(num);
    num++;
}
console.log("EVENS 10-40");
var num = 10

// while (num <= 40) {
//     console.log(num);
//     num += 2;
// }

while (num <= 40) {
    if (num % 2 === 0) {
        console.log(num);

    }

    num += 1;
}
console.log("ODD 300-333");
var num = 300;

// while (num <= 333) {
//     console.log(num + 1)
//     num += 2;
// }

while (num <= 333) {
    if (num % 2 !== 0) {
        console.log(num)
    }
    num++;
}
console.log("DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var num = 5
while (num < 50) {
    if (num % 5 === 0 && num % 3 === 0)
        console.log(num);
    num++;
};
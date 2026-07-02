//Base 8, number system => 0, 1, 2, 3, 4, 5, 6, 7
//Representing octal in JavaScript : 0o[number]


// octal to decimal
const octalNum = 0o12; // Octal representation (10 in decimal).
console.log(octalNum)

//Octal to decimal conversion
// 10 => 1 * 8^1 + 0 * 8^0 = 8
console.log(parseInt("12", 8)) // 10 in decimal

//Decimal to octal conbersion
// 10 ÷ 8 = 1 remainder 2 → write down 2
// 1 ÷ 8 = 0 remainder 1 → write down 1

// So, 10 (decimal) = 12 (octal)
const num = 10
console.log(num.toString(8))


function octalTodecimal(numArr, radix = 10){
    let number = 0;
    numArr.forEach((num, idx) => {
        number += num * Math.pow(radix, idx) 
    });
    return number;
}

const val = deciToOctal([2, 1], 8)
console.log(val)
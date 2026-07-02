function sum(...num){
    return num.reduce((acc, n) => acc + n);
}

function product(...num){
   return num.reduce((acc, n) => acc * n);
}

// module.exports = sum;

// module.exports = {
//     sum,
//     product
// }

module.exports.sum = sum
module.exports.product = product
// const solution = (array, n) => {
//     let count = 0;
//     for (elem of array) {
//         if (elem === n) count++;
//     }
//     return count;
// }

const solution = (array, n) => array.filter(v => v === n).length;
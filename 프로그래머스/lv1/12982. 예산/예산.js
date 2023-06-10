// function solution(d, budget) {
//     d.sort((a,b) => a-b);
//     let index = 0;
//     let count = 0;
//     while (budget > 0) {
//         if (budget - d[index] < 0) break;
//         else {
//             budget -= d[index];
//             count += 1;
//             index += 1;
//         }
//     }
//     return count;
// }

function solution(d, budget) {
    d.sort((a,b) => a-b);
    let count = 0; 
    let sum = 0;
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        count += 1;
        
        if (budget < sum) count-=1;
    }
    return count;
}
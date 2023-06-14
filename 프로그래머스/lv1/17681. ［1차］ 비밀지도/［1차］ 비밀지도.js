function binary(num, n) {
    let binary = [];
    while (Number(num) > 0) {
        binary.unshift(Number(num) % 2)
        num = parseInt(Number(num) / 2);
    }
    return binary.join('').padStart(n, 0);
    
}
function solution(n, arr1, arr2) {
    let arr1_solved = []; let arr2_solved = []; let solved = [];
    for (let i = 0; i < n; i++) {
        arr1_solved[i] = [];
        arr2_solved[i] = [];
        solved[i] = [];
    }
    arr1.forEach((v,index) => {
        arr1_solved[index] = binary(v, n);
    })
    arr2.forEach((v,index) => {
        arr2_solved[index] = binary(v,n);
    })
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            Number(arr1_solved[i][j]) || Number(arr2_solved[i][j]) === 1 ? 
                solved[i] += "#" : solved[i] += " ";
        }
    }
    
    return solved;
}
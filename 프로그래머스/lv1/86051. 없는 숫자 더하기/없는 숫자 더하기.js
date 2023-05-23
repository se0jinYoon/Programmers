function solution(numbers) {
    let answer = 0;
    let array = new Array(10).fill(0);
    numbers.forEach(v => {
        array[v] = v;
    })
    array.forEach((v,index) => {
        v === 0 ? answer+= index : answer
    })
    return answer;
}
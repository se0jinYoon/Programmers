function solution(numbers) {
    let answerRepeat = [];
    for (let i = 0 ; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            answerRepeat.push(numbers[i] + numbers[j]);
        }
    }
    return [...new Set(answerRepeat)].sort((a,b) => a-b);
}
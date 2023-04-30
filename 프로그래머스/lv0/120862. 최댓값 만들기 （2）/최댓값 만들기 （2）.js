function solution(numbers) {
    numbers.sort((a,b) => b-a);
    let max1 = numbers[0] * numbers[1];
    let max2 = numbers.at(-1) * numbers.at(-2);
    
    return Math.max(max1, max2);
    
}
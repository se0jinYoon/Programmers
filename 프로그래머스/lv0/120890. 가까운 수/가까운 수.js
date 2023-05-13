function solution(array,n) {
    array.sort((a,b) => a-b);
    let minValue = 0;
    let minIndex = 0;
    let answer = []
    
    for (let i = 0; i < array.length; i++) {
        answer.push(Math.abs(n - array[i]));
        minValue = Math.min(...answer);
        minIndex = answer.indexOf(minValue);
    } 
    return array[minIndex];
    
    
}
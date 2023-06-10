function solution(n) {
    let three = "";
    let answer = 0;
    while (n > 0){
        three += n % 3;
        n = parseInt(n / 3);
    }
    let reversed = [...three].reverse().join('');
    for (let i = reversed.length-1; i >= 0; i--) {
        answer += Number(reversed[i]) * (Math.pow(3,i));
    }
    return answer;
}
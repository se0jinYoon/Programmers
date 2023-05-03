function isPrime(num) {
    if (num == 1 || num == 2) return 0;
    else {
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i == 0) return 1
        }
        return 0;
    }
} 

function solution(n) {
    let answer = 0;
    for (let i = 1; i <=n; i++) {
        answer += isPrime(i);
    }
    return answer;
}
function solution(n) {
    let mid = Math.sqrt(n);
    let answer = 0;
    for (let i = 0; i < mid; i++) {
        answer += n % i == 0 ? 1 : 0;
    }
    return Number.isInteger(mid) ? answer*2+1 : answer*2;
}
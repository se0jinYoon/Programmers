function solution(a, b, n) {
    let answer = 0;
    while (n >= a) { 
        let q = Math.floor(n / a); // 1
        let newCoke = q*b; // 1
        n = (n - (q*a)) + newCoke; // 3-2+1
        answer += newCoke; //2
    }
    return answer;
}
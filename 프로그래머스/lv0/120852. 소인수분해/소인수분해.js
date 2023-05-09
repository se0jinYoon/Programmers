function get_primes(num) {
    const prime = [false, false, ...Array(num - 1).fill(true)];
    
    for(let i = 2; i * i <= num; i += 1) {
        if(prime[i]) {
            for(let j = i * 2; j <= num; j += i) {
                prime[j] = false;
            }
        }
    }
    return prime.map((v, i) => (v) ? i : 0).filter(e => e);
}

function solution(n) {
    let answer = [];
    get_primes(n).forEach(v => {
        if (n % v == 0) answer.push(v);
    })
    return answer;
}

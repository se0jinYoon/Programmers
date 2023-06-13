function solution(t, p) {
    let key = p.length;
    let answer = 0;
    for (let i = 0; i <= t.length - key; i++) {
        if (Number(t.slice(i,i+key)) <= Number(p)) answer += 1;
    }
    return answer;
}
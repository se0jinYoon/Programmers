function solution(t, p) {
    let key = p.length;
    let list = [];
    let answer = 0;
    for (let i = 0; i <= t.length - key; i++) {
        list.push(t.slice(i,i+key));
    }
    list.forEach(v => {
        if (Number(v) <= Number(p)) answer += 1;
    })
    return answer;
}
function solution(s1, s2) {
    let ans = 0;
    s1.forEach(v => ans += s2.includes(v) ? 1 : 0);
    return ans;
}
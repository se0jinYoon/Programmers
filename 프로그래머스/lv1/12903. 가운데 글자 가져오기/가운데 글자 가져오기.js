function solution(s) {
    return s.length % 2 === 0 ? s.slice(Number(s.length/2)-1, Number(s.length/2)+1) : s[parseInt(s.length/2)]
}
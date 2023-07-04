function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = "";
    
    [...s].forEach(v => {
        if (v === " ") answer += " ";
        else {
            answer += v === v.toUpperCase() ? upper[(upper.indexOf(v)+n)%upper.length] : lower[(lower.indexOf(v)+n)%lower.length];
        }
    })
    return answer;
}
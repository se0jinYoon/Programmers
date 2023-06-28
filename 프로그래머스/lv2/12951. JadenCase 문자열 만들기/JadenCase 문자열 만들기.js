function solution(s) {
    let splited = s.split(' ');
    let answer = "";
    splited.forEach(v => {
        [...v].forEach((v,index) => {
            if (index === 0) answer += v.toUpperCase();
            else answer += v.toLowerCase();
        })
        answer += " ";
    })
    
    return answer.slice(0,answer.length-1);
}
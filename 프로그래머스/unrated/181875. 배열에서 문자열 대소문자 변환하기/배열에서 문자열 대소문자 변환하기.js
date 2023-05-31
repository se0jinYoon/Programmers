function solution(strArr) {
    let answer = [];
    strArr.forEach((v,index) => {
        if (index % 2 === 0) answer.push(v.toLowerCase());
        else answer.push(v.toUpperCase());
    })
    return answer;
}
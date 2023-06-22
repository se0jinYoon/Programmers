// {b:0,a:3,n:2}
function solution(s) {
    let info = new Map();
    let answer = [];
    [...s].forEach((v,index) => {
        if (info.get(v) === undefined) {
            info.set(v,index);
            answer.push(-1);
        }
        else {
            answer.push(index - info.get(v));
            info.set(v,index);
        }
    })
    return answer;
}
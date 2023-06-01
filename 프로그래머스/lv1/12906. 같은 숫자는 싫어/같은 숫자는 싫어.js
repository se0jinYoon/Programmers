function solution(arr)
{
    let answer = [];
    let head = 0;
    arr.forEach(v => {
        if (answer.length === 0) answer.push(v);
        else {
            if (!(v === answer[head])) {
                answer.push(v);
                head += 1;
            }
        }
    })
    return answer;
}
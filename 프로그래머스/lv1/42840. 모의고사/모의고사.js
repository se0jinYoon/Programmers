function solution(answers) {
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    
    let score = new Array(3).fill(0);
    let answer = [];
    
    for (let i = 0; i<answers.length; i++) {
        let curr = answers[i];
        if (curr === first[i%5]) score[0] += 1;
        if (curr === second[i%8]) score[1] += 1;
        if (curr === third[i%10]) score[2] += 1;
    }
    
    console.log(score);
    let max = Math.max(...score);
    let idx = score.indexOf(max);
    while (idx != -1) {
        answer.push(idx+1);
        idx = score.indexOf(max, idx+1);
    }
    return answer;

}
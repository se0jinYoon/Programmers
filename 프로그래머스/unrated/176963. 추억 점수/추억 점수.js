function solution(name, yearning, photo) {
    // 이름당 그리움 점수 map에 할당
    let score = new Map();
    for (let i = 0; i<name.length; i++) {
        score.set(name[i], yearning[i]);
    }
    
    let answer = [];
    let roundScore = 0;
    photo.forEach(v => {
        v.forEach(name => {
            if(score.get(name)) {
                roundScore += score.get(name);
            }
        })
        answer.push(roundScore);
        roundScore = 0;
    })
    
    return answer;
}
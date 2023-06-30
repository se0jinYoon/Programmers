function solution(n, words) {
    let words_said = [];
    let turn_num = new Array(n).fill(0);
    let turn = 0;
    for (let i = 0; i < words.length-1; i++) {
        turn = turn % n;
        turn_num[turn] += 1;
        turn += 1;
        console.log(turn_num);
        if (!words_said.includes(words[i+1]) && words[i][(words[i].length -1)] === words[i+1][0]) {
            words_said.push(words[i]);
        }
        else  {
            let wrong_turn = (turn+1)%n;
            if (wrong_turn == 0) return [n, turn_num[n-1]+1];
            else return [wrong_turn, turn_num[wrong_turn]+1];
        }
    }
    return [0,0];
}


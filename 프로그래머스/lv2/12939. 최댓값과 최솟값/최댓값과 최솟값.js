function solution(s) {
    let splited = s.split(' ');
    let answer = "";
    
    answer += Math.min(...splited);
    answer += " ";
    answer += Math.max(...splited);
    return answer;
}
function solution(order) {
    let answer = 0;
    let orderS = order.toString();
    [...orderS].forEach(v => {if (v == 3 || v ==6 || v== 9) answer +=1})
    return answer;
    
}
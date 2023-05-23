function solution(phone_number) {
    let answer = "";
    answer += "*".repeat(phone_number.length - 4);
    answer += phone_number.slice(phone_number.length-4);
    return answer;
}
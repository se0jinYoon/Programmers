function solution(s) {
    let eng = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
    }
    let stack = "";
    let num = [];
    let answer = "";
    for (let i = 0; i< s.length; i++) {
        stack += s[i];
        if (Object.keys(eng).includes(stack)) {
            answer += eng[stack];
            stack = "";
        }
        if (Object.values(eng).includes(stack)){
            answer += stack;
            stack = "";
        }
    }
    return Number(answer);
}
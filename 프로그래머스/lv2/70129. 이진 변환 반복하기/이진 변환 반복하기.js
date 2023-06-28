function solution(s) {
    let newS = s;
    let len = s.length;
    let countZero = 0;
    let count = 0;
    while (newS != "1") {
        let origin = newS.length;
        let newSLen = [...newS].filter(v => v === "1").length;
        countZero += origin - newSLen;
        newS = newSLen.toString(2);
        count += 1;
    }
    return [count, countZero];
}
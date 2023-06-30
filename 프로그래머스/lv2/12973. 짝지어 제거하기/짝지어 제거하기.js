function solution(s) {
    let splited = [...s];
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || stack.at(-1) != splited[i]) {
            stack.push(splited[i]);
        }
        else stack.pop();
    }
    return stack.length === 0? 1 : 0;
}

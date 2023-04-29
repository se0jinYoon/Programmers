function solution(cipher, code) {
    let answer = "";
    
    const codeLen = parseInt(cipher.length / code);
    for (let i = 1; i <= codeLen; i++) {
        answer += cipher[i*code-1];
    }
    return answer;
}
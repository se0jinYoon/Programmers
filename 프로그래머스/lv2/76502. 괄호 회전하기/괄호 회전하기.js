function solution(s) {
    // 왼쪽 괄호를 stack에 넣기 위함
    const pair = { '}':'{', ']':'[', ')':'('};
    let arr = s.split('');
    let result = 0;
    
    const isValid = (arr) => {
        const stack = [];
        for (let i = 0; i<arr.length; i++) {
            const curr = arr[i];
            // ( 왼쪽 괄호라면
            if (pair[curr] === undefined) {
                // stack에 넣기
                stack.push(curr);
            }
            // ) 오른쪽 괄호라면 stack의 가장 마지막에 들어온 요소와 짝이 맞아야 함
            else {
                if (pair[curr] !== stack.at(-1)) return false;
                // 짝이 맞으면 stack에서 요소 제거
                stack.pop();
            }
        }
        // for문 다 돌고도 stack에 값 남아있으면 짝이 지어지지 않은 것
        if (stack.length) return false;
        return true;
    }
    
    for (let i=0; i<s.length; i++) {
        if (isValid(arr)) result+=1;
        // 왼쪽으로 한 칸씩 이동
        arr.push(arr.shift())
    }
    return result;
}
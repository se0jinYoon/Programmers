function solution(array) {
    let counting = new Map();
    let max = 0;
    let maxArray = [] //최대값 저장 배열
    
    for (let i of array) {
        if(!counting.has(i)) counting.set(i, 0);
        if(counting.has(i)) counting.set(i, counting.get(i) + 1);
        while(counting.get(i) > max) max++;  // max값 업데이트
    }
    
    for (let [k, v] of counting) {
        if (v === max) maxArray.push(k); //최대값 중복 체크위해 저장
    }
    
    return maxArray.length === 1? maxArray[0] : -1;
}


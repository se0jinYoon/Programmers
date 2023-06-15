function solution(strings, n) {
    // 미리 사전순 정렬
    let sorted_string = strings.sort();
    
    // 문자 : 기준 문자열 map 생성
    let map = {};
    sorted_string.forEach(v => {
        map[v] = v[n];
    })
    
    let answer = [];
    // 기준값을 오름차순으로 정렬
    let values = Object.values(map).sort();
    let keys = Object.keys(map);
    
    // value로 key 찾기
    for (let i = 0; i<strings.length; i++) {
        let key = keys.find(key => map[key] === values[i]);
        answer.push(key);
        // 중복 방지
        delete map[key];
    }
    
    return answer; 
}
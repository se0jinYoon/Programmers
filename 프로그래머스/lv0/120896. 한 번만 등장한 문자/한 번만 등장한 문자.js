function solution(s) {
    let map = new Map();
    [...s].forEach(v => {
        if (!map[v]) map[v] = 1;
        else map[v] += 1;
    })
    return Object.keys(map)
                 .filter(key => map[key] === 1)
                 .sort()
                 .join('');
}
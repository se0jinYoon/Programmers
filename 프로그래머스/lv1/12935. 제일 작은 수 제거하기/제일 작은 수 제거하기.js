function solution(arr) {
    let min = [...arr].sort((a,b) => a-b).shift();
    return arr.length === 1 ? [-1] : arr.filter(v => v!=min)
}
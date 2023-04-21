function solution(n) {
    let strN = n.toString();
    return [...strN].reduce((prev, curr) => Number(prev)+Number(curr),0);
}
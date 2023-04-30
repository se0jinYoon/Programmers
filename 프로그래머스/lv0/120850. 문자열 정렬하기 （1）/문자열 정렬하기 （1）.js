function solution(my_string) {
    let regExp = /[\d]/g;
    return my_string.match(regExp)
        .map(v => Number(v))
        .sort((a,b) => a-b);
}
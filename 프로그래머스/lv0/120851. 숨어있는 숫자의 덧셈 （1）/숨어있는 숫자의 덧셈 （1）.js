function solution(my_string) {
    let regExp = /[\d]/g;
    let numList = my_string.match(regExp).map(v => Number(v));
    return numList.reduce((a,b) => {return a+b},0);
}
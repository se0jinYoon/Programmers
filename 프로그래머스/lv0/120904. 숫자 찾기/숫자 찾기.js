function solution(num, k) {
    let kString = k.toString();
    let numString = num.toString();
    return numString.indexOf(kString) == -1 ? -1 : numString.indexOf(kString) +1;
}
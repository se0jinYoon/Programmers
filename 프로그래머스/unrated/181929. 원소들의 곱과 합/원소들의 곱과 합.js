function solution(num_list) {
    let mul = num_list.reduce((prev,curr) => prev *= curr, 1);
    let sumPow = Math.pow(num_list.reduce((prev,curr) => prev += curr, 0),2);
    return mul < sumPow ? 1 : 0;
}
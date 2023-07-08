const gcd = (a,b) => a%b ? gcd(b,a%b) : b;
const lcm = (a,b) => a*b / gcd(a,b);
function solution(arr) {
    return arr.reduce((prev,curr) => lcm(prev,curr));

}
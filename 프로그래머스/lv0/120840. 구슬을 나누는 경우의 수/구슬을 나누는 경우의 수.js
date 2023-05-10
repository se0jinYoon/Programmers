function factorial(n) {
    if (n == 1 || n == 0) {
        return BigInt(1);
    }
    else return BigInt(n) * BigInt(factorial(n-1));
}

function solution(balls, share) {
    return factorial(balls) / (factorial(share) * factorial(balls-share));
}


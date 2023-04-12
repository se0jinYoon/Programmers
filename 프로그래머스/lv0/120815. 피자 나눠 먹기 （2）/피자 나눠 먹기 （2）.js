const getLcm = (a, b) => {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a%b);
    const lcm = (a, b) => a * b / gcd(a,b);
    return lcm(a,b);
}

const solution = n => {
    return getLcm(n, 6) / 6;
}
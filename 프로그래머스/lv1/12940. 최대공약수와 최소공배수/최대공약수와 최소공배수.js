function solution(n, m) {
    const gcd = (n,m) => n%m === 0 ? m : gcd(m, n%m);
    const lcd = (n,m) => n * m / gcd(n,m);
    return [gcd(n,m), lcd(n,m)];
}
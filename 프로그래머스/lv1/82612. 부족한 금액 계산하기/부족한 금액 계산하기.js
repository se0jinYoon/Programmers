function solution(price, money, count) {
    let wholePrice = 0;
    for (let i = 1; i <= count; i++) {
        wholePrice += price * i;
    }
    return money >= wholePrice ? 0 : Math.abs(money - wholePrice);
}
function solution(n) {
    let three = "";
    while (n != 0) {
        n = Math.ceil(n / 3);
        console.log(n);
        three += n % 3;
    }
    console.log(three);
}
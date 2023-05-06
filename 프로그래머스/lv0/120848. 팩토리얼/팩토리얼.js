function factorial(num) {
    if (num == 0 || num == 1) 
        return 1;
    else
        return num * factorial(num-1);
}

function solution(n) {
    let num = 1;
    while (1) {
        if (factorial(num) == n){
            return num;
            break;
        }
        else if (factorial(num) > n) {
            return num-1;
            break;
        }
        else
            num += 1;
    }
}
function solution(numbers) {
    let list = {
        'zero' : '0',
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9
    }
    let target = '';
    let answer = '';

    numbers.split('').forEach(v => {
        target += v;
        if (list[target]) {
            answer += list[target];
            target = ''
        }
    })
    return Number(answer);
}
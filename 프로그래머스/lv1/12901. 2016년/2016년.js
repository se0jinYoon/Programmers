function solution(a, b) {
    let week = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let date = 0;
    // 1 3 5 7 8 10 12
    // 2 4 6 9 11
    for (let i = 1; i < a; i++) {
        if (i == 2) {
            date += 29;
        }
        else if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
            date += 31;
        }
        else {
            date += 30;
        }  
        console.log(date);
    }
    date += b;
    date -= 1;
    // console.log(date);
    // console.log(date%7)
    return week[date%7]
}

function solution(s) {
    let regex = /[\D]/g
    if (s.length === 4 || s.length === 6) {
        if (regex.test(s)) return false;
        else return true;
    }
    else return false;
}
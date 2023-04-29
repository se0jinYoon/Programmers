function solution(my_string) {
    return [...my_string].map(v => {
        return v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()}).join('');
}
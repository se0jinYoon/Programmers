function swap(a) {
    if (a == "2") return "0";
    else if (a == "0") return "5";
    else if (a == "5") return "2";
}

function solution(rsp) {
    return [...rsp].map(v => swap(v)).join('');
}
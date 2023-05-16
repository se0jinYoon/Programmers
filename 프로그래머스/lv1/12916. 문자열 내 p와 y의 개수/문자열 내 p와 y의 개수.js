function solution(s){
    // let p = /[pP]/g;
    // let y = /[yY]/g;
    let P = [...s].filter(v => v === "p" | v === "P").length;
    let Y = [...s].filter(v => v === "y" | v === "Y").length;
    return P === Y ? true : false;
    // return s.match(p).length === s.match(y).length ? true : false;
}
function solution(spell, dic) {
    let dic_sorted = [...dic].map(v => [...v].sort().join(''));
    return dic_sorted.includes(spell.sort().join('')) ? 1 : 2;
    
    
}
function solution(id_pw, db) {
    let dic = {};
    db.forEach(v => {
        dic[v[0]] = v[1]
    });
    if (!dic[id_pw[0]]) return "fail";
    
    else 
        return dic[id_pw[0]] === id_pw[1] ? "login" : "wrong pw";
}
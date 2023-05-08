function solution(my_string) {
    let regex = /[a-zA-Z]+/g;
    return my_string.split(regex)
                    .filter(v => v!="")
                    .reduce((prev, curr) => {return Number(prev) + Number(curr)},0);
}
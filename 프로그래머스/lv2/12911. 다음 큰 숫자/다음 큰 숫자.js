function solution(n) {
    let origin = n.toString(2).split("1").length -1;

    let newN = n;
    while (true) {
        newN += 1
        let binaryNew = newN.toString(2);
        if (binaryNew.split("1").length - 1 === origin) {
            return newN;
            break;
        };
    }
}
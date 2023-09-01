function solution(n,a,b)
{
    let count = 1;
    
    while (true) {
        if ((Math.abs(a-b) === 1)) {
            let max = Math.max(a,b);
            if (max % 2 === 0) {
                break;
            }
        }
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);

        count += 1;
    }
    return count;
}

//              1
//      1                 2
//   1     2          3         4
//  1  2  3  4     5    6.   7    8 
// 12 34 56 78    910 1112 1314 1516
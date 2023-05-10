function solution(my_string) {
    let my_array = my_string.split(' ');
    let num1 = Number(my_array[0]);
    
    for (let i = 1; i < my_array.length-1; i+=2) {
        if (my_array[i] === '+') num1 += Number(my_array[i+1]);
        else num1 -= Number(my_array[i+1]);
    }
    return num1;
}


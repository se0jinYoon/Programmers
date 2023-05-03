function solution(my_string, num1, num2) {  
    let my_stringC = [...my_string]
    let temp = my_stringC[num1];
    my_stringC[num1] = my_stringC[num2];
    my_stringC[num2] = temp;
    
    return my_stringC.join('');
    
    
}
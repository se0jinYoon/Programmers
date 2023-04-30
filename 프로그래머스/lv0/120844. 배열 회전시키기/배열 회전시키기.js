function solution(numbers, direction) {
    if (direction == "right") {
        let rightMost = numbers.pop();
        numbers.unshift(rightMost);
        return numbers;
    }
    else{
        let leftMost = numbers.shift();
        numbers.push(leftMost);
        return numbers;
    }
}
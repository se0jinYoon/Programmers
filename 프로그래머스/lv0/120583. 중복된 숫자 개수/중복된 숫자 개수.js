const solution = (array, n) => {
    let count = 0;
    for (elem of array) {
        if (elem === n) count++;
    }
    return count;
}
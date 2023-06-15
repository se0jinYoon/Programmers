function solution(sizes) {
    let sorted = [...sizes]
    
    sorted.forEach(v => {
        v.sort((a,b) => a-b)
    })
    
    let max_width = 0; let max_height = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][0] > max_width) max_width = sorted[i][0];
        if (sorted[i][1] > max_height) max_height = sorted[i][1];
    }
    
    return max_width * max_height;
}
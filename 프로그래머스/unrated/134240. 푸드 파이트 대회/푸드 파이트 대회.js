// 칼로리 낮은 음식부터 배치
// 음식의 종류, 양, 먹는 순서 같아야 함

function solution(food) {
    let round1 = [];
    for (let i=1; i<food.length; i++) {
        let num = parseInt(food[i] / 2);
        for (let j= 0; j < num; j++) {
            round1.push(i);
        }
    }
    let round2 = [...round1].reverse();
    return [...round1,0,...round2].join('');
}
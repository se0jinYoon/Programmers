const solution = (money) => {
    let coffee = Math.floor(money / 5500);
    let left = money - ( coffee * 5500);
    return [coffee, left];
}
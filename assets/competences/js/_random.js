export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) color += letters[~~(Math.random() * 16)];
    return color;
}

export function getRandomInt(min, max) {
    return ~~(Math.random() * (max - min) + min);
}
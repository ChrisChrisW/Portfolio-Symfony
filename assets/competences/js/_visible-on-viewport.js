export function isInViewport(e) {
    const distance = e.getBoundingClientRect();
    return (
        distance.top > -38 &&
        distance.left >= 0 &&
        distance.bottom - 30 <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function isVisible(e) {
    return e.getBoundingClientRect().top + 200 >= window.innerHeight;
}
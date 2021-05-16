const top = document.querySelector('.scroll-top');
top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', () => {
    /* Grid */
    if(isVisible(document.querySelector('.content'))) top.classList.add('hidden');
    else top.classList.remove('hidden');
},false);

function isVisible(e) {
    return e.getBoundingClientRect().top + 800 >= window.innerHeight;
}
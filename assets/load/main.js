document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => document.querySelector('.load').style = 'opacity : 0',2000);
    setTimeout(() => document.querySelector('.load').remove(),3800);
});
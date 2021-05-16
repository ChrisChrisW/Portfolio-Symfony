import {isInViewport,isVisible} from './_visible-on-viewport';
import {getRandomColor,getRandomInt} from './_random';

/* Scroll Top */
const top = document.querySelector('.scroll-top');
top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* Scroll Action */
window.addEventListener('scroll', () => {
    /* Progress Bar */
    document.querySelectorAll('.bar').forEach((bar) => {
        bar.setAttribute('title', 'Cette progress bar n\'a pas de sens, ce qui est important est le mot "Acquis"');
        if (!isInViewport(bar)) bar.querySelector('.front').style = `background:${getRandomColor()};width:${getRandomInt(68,100)}%;`;
    })

    /* Timeline */
    if(isVisible(document.querySelector('.container-fluid'))) top.classList.add('hidden');
    else top.classList.remove('hidden');
},false);
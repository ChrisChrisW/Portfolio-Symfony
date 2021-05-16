const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.grid__item');

const Masonry = require('./vendor/masonry.pkgd.min');

/* Get all filters */
filters.forEach((filter) => {
    /* onClick action */
    filter.addEventListener("click", () => {
        const dataFilter = filter.getAttribute('data-filter');

        /* Remove class active (when someone click) */
        filters.forEach((filter) => {
            if (filter.getAttribute('data-filter') !== dataFilter) filter.classList.remove("active");
        });

        /* get only filter elements */
        items.forEach((item) => {
            const itemFilter = item.getAttribute('data-filter');

            if (filter.classList.contains('active') || dataFilter === 'all' || dataFilter === '') {
                items.forEach((item) => item.style.removeProperty('display'));
                filters[0].classList.add("active");
            }
            else if (dataFilter !== itemFilter) item.style = "display: none";
            else item.style.removeProperty('display');
        });

        /* toggle icon active or not */
        if (filter === filters[0] && filter.classList.contains('active')) filters[0].classList.add("active");
        else filter.classList.toggle('active');

        /* Reload grid system */
        new Masonry(document.querySelector('.grid'), {
            itemSelector: '.grid__item',
            isFitWidth : true,
            columnWidth: 30
        });
    });
});
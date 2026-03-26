/* ANIMACIÓN AL HACER SCROLL */
const cards = document.querySelectorAll('.card');

function showCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const boxTop = card.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            card.classList.add('show');

            // Animar barras
            const bars = card.querySelectorAll('.bar div');
            bars.forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }
    });
}

window.addEventListener('scroll', showCards);
showCards();


/* EFECTO DE ACCORDION EN SECCION DE EXPERIENCIA*/
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", function() {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
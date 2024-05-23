let currentIndex = 0;

function showCard(index) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardsPerView = 4;

    if (index >= totalCards / cardsPerView) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = Math.ceil(totalCards / cardsPerView) - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * (100 / cardsPerView);
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextCard() {
    showCard(currentIndex + 1);
}

function prevCard() {
    showCard(currentIndex - 1);
}


showCard(currentIndex);
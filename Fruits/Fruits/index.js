// JavaScript for automatic sliding
let slideIndex = 0;
const moveSlider = (direction) => {
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].getBoundingClientRect().width;
    const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight);
    const sliderWidth = document.querySelector('.card-slider').getBoundingClientRect().width;
    const maxSlidesInView = Math.floor(sliderWidth / (cardWidth + cardMargin));

    if (direction === 'next') {
        slideIndex += 1;
    } else if (direction === 'prev') {
        slideIndex -= 1;
    }

    slideIndex = Math.min(cards.length - maxSlidesInView, Math.max(0, slideIndex));

    document.querySelector('.card-slider').scrollTo({
        left: slideIndex * (cardWidth + cardMargin),
        behavior: 'smooth'
    });
};

// Automatic sliding interval (adjust as needed)
setInterval(() => {
    moveSlider('next');
}, 5000); // Slide every 5 seconds (5000 milliseconds)


// Get all carousels
const carousels = document.querySelectorAll('.carousel-container');

// Initialize each carousel
carousels.forEach((carousel, index) => {
    const carouselSlide = carousel.querySelector('.carousel-slide');
    const carouselImages = carousel.querySelectorAll('.carousel-slide img');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');

    let counter = 0;
    const totalSlides = carouselImages.length;

    // Function to move the carousel
    function updateCarousel() {
        carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
    }

    // Next Button Click Event
    nextBtn.addEventListener('click', () => {
        if (counter >= totalSlides - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateCarousel();
    });

    // Previous Button Click Event
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) {
            counter = totalSlides - 1;
        } else {
            counter--;
        }
        updateCarousel();
    });
});

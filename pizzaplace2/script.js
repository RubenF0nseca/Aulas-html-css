const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselContainer = document.querySelector('.carousel-container');

let currentIndex = 0;
const totalItems = carouselContainer.children.length;
const itemWidth = carouselContainer.children[0].offsetWidth;
const scrollWidth = totalItems * itemWidth;
const finalWidth = scrollWidth - window.screen.width + 65;

window.addEventListener('load', function() {
  slideTo(currentIndex);
});

function slideTo(index) {
  carouselContainer.style.transition = 'transform 0.4s ease-in-out';
  carouselContainer.style.transform = `translateX(-${index * itemWidth}px)`;
}

function slideToEnd() {
  carouselContainer.style.transition = 'transform 0.4s ease-in-out';
  carouselContainer.style.transform = `translateX(-${finalWidth}px)`;
}

function nextSlide() {
  if (currentIndex === totalItems - 6) {
    carouselContainer.style.transition = 'none';
    carouselContainer.style.transform = `translateX(-${finalWidth}px)`;
    setTimeout(() => {
      currentIndex = 0;
      slideTo(currentIndex);
    }, 50);
  } else if ((currentIndex + 7) * itemWidth >= scrollWidth) {
    slideToEnd();
    currentIndex++;
  } else {
    currentIndex++;
    slideTo(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex === 0) {
    carouselContainer.style.transition = 'none';
    carouselContainer.style.transform = `translateX(-${0}px)`;
    setTimeout(() => {
      currentIndex = totalItems - 6;
      slideToEnd();
    }, 50);
  } else {
    currentIndex--;
    slideTo(currentIndex);
  }
}

prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('click', nextSlide);

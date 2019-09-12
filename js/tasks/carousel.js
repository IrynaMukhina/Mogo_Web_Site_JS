/* eslint-disable max-len */
const topNextBtn = document.getElementById('next_top');
const bottomNextBtn = document.getElementById('next_bottom');
const topPrevBtn = document.getElementById('prev_top');
const bottomPrevBtn = document.getElementById('prev_bottom');

const slideCounter = [1, 1];
const slideId = ['container__speech_top', 'container__speech_bottom'];

showSlides(1, 0);
showSlides(1, 1);

//  Next/previous controls
function changeSlide(slideNum, sliderIndex) {
  showSlides(slideCounter[sliderIndex] += slideNum, sliderIndex);
}

function showSlides(slideNum, sliderIndex) {
  let i;
  const slide = document.getElementsByClassName(slideId[sliderIndex]);

  if (slideNum > slide.length) {
    slideCounter[sliderIndex] = 1;
  }

  if (slideNum < 1) {
    slideCounter[sliderIndex] = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }

  slide[slideCounter[sliderIndex]-1].style.display = 'flex';
}

// set event listener to buttons
const carousel = ( function() {
  const init = () => {
    topNextBtn.addEventListener('click', function() {
      changeSlide(1, 0);
    });
    bottomNextBtn.addEventListener('click', function() {
      changeSlide(1, 1);
    });
    topPrevBtn.addEventListener('click', function() {
      changeSlide(-1, 0);
    });
    bottomPrevBtn.addEventListener('click', function() {
      changeSlide(-1, 1);
    });
  };

  return {
    init,
  };
}());

export default carousel;

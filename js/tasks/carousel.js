/* eslint-disable max-len */
const slideIndex = [1, 1];
const slideId = ['container__speech_top', 'container__speech_bottom'];

showSlides(1, 0);
showSlides(1, 1);

//  Next/previous controls
function plusSlides(n, num) {
  showSlides(slideIndex[num] += n, num);
}

function showSlides(n, num) {
  let i;
  const slide = document.getElementsByClassName(slideId[num]);

  if (n > slide.length) {
    slideIndex[num] = 1;
  }

  if (n < 1) {
    slideIndex[num] = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }

  slide[slideIndex[num]-1].style.display = 'flex';
}

// set event listener to buttons
const carousel = ( function() {
  const init = () => {
    document.getElementById('next_top').addEventListener('click', function() {
      plusSlides(1, 0);
    });
    document.getElementById('next_bottom').addEventListener('click', function() {
      plusSlides(1, 1);
    });
    document.getElementById('prev_top').addEventListener('click', function() {
      plusSlides(-1, 0);
    });
    document.getElementById('prev_bottom').addEventListener('click', function() {
      plusSlides(-1, 1);
    });
  };

  return {
    init,
  };
}());

export default carousel;

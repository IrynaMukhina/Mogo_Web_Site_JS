// TASK 5
import scrollChange from './tasks/scrollChange.js';

// TASK 6
import openActivity from './tasks/openActivity.js';

// TASK 7
import carousel from './tasks/carousel.js';

// TASK 8
import popUpWindow from './tasks/popUpWindow.js';

// TASK 9
import requestData from './tasks/requestData.js';

document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    scrollChange.init();
  };

  openActivity.init();
  carousel.init();
  popUpWindow.init();
  requestData.init();
});

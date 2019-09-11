// TASK 5
import scrollChange from './modules/scrollChange.js';

// TASK 6
import openActivity from './modules/openActivity.js';

// TASK 7
import carousel from './modules/carousel.js';

// TASK 8
import popUpWindow from './modules/popUpWindow.js';

// TASK 9
import requestData from './modules/requestData.js';

// Use modules
document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    scrollChange.init();
  };

  openActivity.init();
  carousel.init();
  popUpWindow.init();
  requestData.init();
});

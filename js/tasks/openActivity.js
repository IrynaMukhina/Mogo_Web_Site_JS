/* eslint-disable max-len */
import changeClass from '../modules/changeClass.js';

const handler = changeClass();

const openActivity = (function() {
  const activities = {
    'photography': {
      img: './assets/photo_wall.png',
    },
    'creativity': {
      img: './assets/creativity.jpg',
    },
    'web design': {
      img: './assets/web_design.jpg',
    },
  };

  const arrowBtn = [...document.querySelectorAll('.btn__arrow')];
  const pic = document.getElementById('activity_picture');

  function openDescription() {
    const open = this.classList.contains('btn__arrow_open');
    const description = this.parentNode.parentNode.children[1];
    const descriptionList = [...document.querySelectorAll('.activity__description_open')];

    if (!open) {
      const openBtnList = [...document.querySelectorAll('.btn__arrow_open')];

      if (openBtnList.length) {
        openBtnList.forEach((el) => {
          handler.toggleClass(el, 'btn__arrow_close', 'btn__arrow_open');
        });

        descriptionList.forEach((el) => {
          handler.toggleClass(el, 'activity__description_close', 'activity__description_open');
        });
      }

      handler.toggleClass(this, 'btn__arrow_open', 'btn__arrow_close');
      handler.toggleClass(description, 'activity__description_open', 'activity__description_close');
      pic.src = activities[[...this.parentNode.children][1].innerHTML].img;
    } else {
      handler.toggleClass(this, 'btn__arrow_close', 'btn__arrow_open');
      handler.toggleClass(description, 'activity__description_close', 'activity__description_open');
    }
  }

  const init = () => {
    arrowBtn.forEach((el) => el.addEventListener('click', openDescription));
  };

  return {
    init,
  };
}());


export default openActivity;

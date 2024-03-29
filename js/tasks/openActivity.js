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

  const arrowBtnArray = [...document.querySelectorAll('.btn__arrow')];
  const picture = document.getElementById('activity_picture');

  function openDescription() {
    const open = this.classList.contains('btn__arrow_open');
    const descriptionList = [...document.querySelectorAll('.activity__description_open')];
    const description = this.parentNode.parentNode.children[1];
    const activityTitle = [...this.parentNode.children][1];

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
      picture.src = activities[activityTitle.innerHTML].img;
    } else {
      handler.toggleClass(this, 'btn__arrow_close', 'btn__arrow_open');
      handler.toggleClass(description, 'activity__description_close', 'activity__description_open');
    }
  }

  const init = () => {
    arrowBtnArray.forEach((el) => el.addEventListener('click', openDescription));
  };

  return {
    init,
  };
}());


export default openActivity;

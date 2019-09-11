/* eslint-disable max-len */
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
    const open = !this.classList.contains('btn__arrow_open');
    const description = this.parentNode.parentNode.children[1];
    const descriptionList = [...document.querySelectorAll('.activity__description_open')];

    if (open) {
      const openBtnList = [...document.querySelectorAll('.btn__arrow_open')];

      if (openBtnList.length) {
        openBtnList.forEach((el) => {
          el.classList.remove('btn__arrow_open');
          el.classList.add('btn__arrow_close');
        });

        descriptionList.forEach((el) => {
          el.classList.remove('activity__description_open');
          el.classList.add('activity__description_close');
        });
      }

      this.classList.remove('btn__arrow_close');
      this.classList.add('btn__arrow_open');
      description.classList.remove('activity__description_close');
      description.classList.add('activity__description_open');
      pic.src = activities[[...this.parentNode.children][1].innerHTML].img;
    } else {
      this.classList.remove('btn__arrow_open');
      this.classList.add('btn__arrow_close');
      description.classList.remove('activity__description_open');
      description.classList.add('activity__description_close');
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

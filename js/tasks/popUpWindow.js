const popUpWindow = (function() {
  const pictures = [...document.getElementsByClassName('sample')];
  const modalWindow = document.getElementById('modal');
  const modalPicture = document.getElementById('picture__modal');

  function openModalWindow() {
    modalWindow.style.display = 'flex';
    modalPicture.src = this.children[0].src;
    document.body.style.overflow = 'hidden';
  }

  function closeModalWindow() {
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'visible';
  }

  const init = () => {
    modalWindow.addEventListener('click', closeModalWindow);
    pictures.forEach((el) => el.addEventListener('click', openModalWindow));
  };

  return {
    init,
  };
}());

export default popUpWindow;

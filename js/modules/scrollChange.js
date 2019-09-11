/* eslint-disable max-len */
const scrollChange = (function() {
  const init = () => {
    const navigation = document.getElementById('nav');

    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50 ) {
      navigation.classList.add('navigation_dark');
      navigation.classList.remove('navigation_transparent');
    } else {
      navigation.classList.add('navigation_transparent');
      navigation.classList.remove('navigation_dark');
    }
  };

  return {
    init,
  };
}());

export default scrollChange;

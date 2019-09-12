/* eslint-disable max-len */
import changeClass from '../modules/changeClass.js';

const handler = changeClass();

const scrollChange = (function() {
  const init = () => {
    const navigation = document.getElementById('nav');

    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50 ) {
      handler.toggleClass(navigation, 'navigation_dark', 'navigation_transparent');
    } else {
      handler.toggleClass(navigation, 'navigation_transparent', 'navigation_dark');
    }
  };

  return {
    init,
  };
}());

export default scrollChange;

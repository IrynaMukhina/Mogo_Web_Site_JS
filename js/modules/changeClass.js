const changeClass = function() {
  return {
    toggleClass: function(el, classToAdd, classToRemove) {
      el.classList.add(classToAdd);
      el.classList.remove(classToRemove);
    },
  };
};

export default changeClass;

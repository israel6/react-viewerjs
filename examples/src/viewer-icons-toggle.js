// Adds the class that enables modern viewer icons.
// If you want the original icons back, remove this import from `index.js` or remove the class `viewer-icons-modern` from <body>.
(function(){
  function enable() {
    try {
      document.body.classList.add('viewer-icons-modern');
    } catch (e) {
      // If body isn't ready, try again on DOMContentLoaded
      document.addEventListener('DOMContentLoaded', function(){
        document.body.classList.add('viewer-icons-modern');
      });
    }
  }
  enable();
})();

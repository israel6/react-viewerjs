// Simple viewer icons optimization
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

  // Enable icons
  enable();
})();

'use strict';
(()=>{
  var placeholders = document.querySelectorAll('.input-primary');

  function onInputField() {
    var field = this.parentNode;
    var placeholder = field.querySelector('.placeholder');
    
    if (this.value.length > 0) {
      placeholder.classList.add('zoomOut', 'animated');
    } else {
      placeholder.classList.remove('zoomOut', 'animated');
      placeholder.classList.add('zoomIn', 'animated');
    }
  }

  placeholders .forEach((element) => {
    element.oninput =  onInputField;
  });
})();

// Tooltips
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
// Tooltips

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
//   form


// aside height
let content = document.querySelector('#main-content');
let aside = document.querySelector('#aside');
let asideHeight = aside.offsetHeight;

content.style.minHeight = `${asideHeight}px`;

window.addEventListener('resize',function(){
    asideHeight = aside.offsetHeight;
    content.style.minHeight = `${asideHeight}px`;
})
// aside height
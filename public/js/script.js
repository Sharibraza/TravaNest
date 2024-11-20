(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, 
      false
      );
    });
  })();

//   document.addEventListener('DOMContentLoaded', (event) => {
//     const stars = document.querySelectorAll('.fa-star');
//     stars.forEach(star => {
//         star.addEventListener('click', function() {
//             let value = this.getAttribute('data-value');
//             stars.forEach(s => {
//                 if (s.getAttribute('data-value') <= value) {
//                     s.classList.add('checked');
//                 } else {
//                     s.classList.remove('checked');
//                 }
//             });
//         });
//     });
// });

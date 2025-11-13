// main.js - form validation and small helpers
document.addEventListener('DOMContentLoaded', function() {
  // Registration form validation and modal
  const form = document.getElementById('regForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // use built-in browser validity
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        form.querySelector(':invalid')?.focus();
        return;
      }
      // extra check - name length
      const name = document.getElementById('fullName').value.trim();
      if (name.length < 3) {
        document.getElementById('fullName').classList.add('is-invalid');
        return;
      }
      // Show Bootstrap modal for success
      const successModalEl = document.getElementById('successModal');
      if (successModalEl) {
        const modal = new bootstrap.Modal(successModalEl);
        modal.show();
      }
      // Reset form after showing modal
      form.reset();
      form.classList.remove('was-validated');
    });
  }

  // Pre-fill program if URL param exists (from trainer Book Trial links)
  const params = new URLSearchParams(window.location.search);
  const program = params.get('program');
  if (program) {
    const sel = document.getElementById('program');
    if (sel) {
      for (let i=0;i<sel.options.length;i++){
        if (sel.options[i].value.toLowerCase().includes(program.toLowerCase())){
          sel.selectedIndex = i; break;
        }
      }
    }
  }
});

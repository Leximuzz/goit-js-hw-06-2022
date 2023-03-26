const input = document.querySelector('#validation-input');

input.addEventListener('blur', function() {
  const length = this.getAttribute('data-length');
  const valueLength = this.value.length;

  if (valueLength === Number(length)) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
});
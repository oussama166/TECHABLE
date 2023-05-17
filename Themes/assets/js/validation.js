class CheckInput {
  style = getComputedStyle(document.body);
  pass = document.querySelector('.pass');
  constructor(element) {
    this.element = element || '';
    this.title = element.children[0] || '';
    this.input = element.children[1] || '';
    this.error = element.children[2] || '';
  }

  validation(e) {
    if (
      e.target.value === null ||
      e.target.value === undefined ||
      e.target.value === '' ||
      e.target.value.trim() === '' || 
      e === false
    ) {
      this.error.style.display = 'block';
      this.input.style = 'border-color: red;';
    } else {
      this.error.style.display = 'none';
      this.input.style = `border-color: ${this.style.getPropertyValue('--bs-gray-400')};`;
    }
  }

  isValide() {
    this.input.addEventListener('focusout', (e) => {
      this.validation(e);
    });

  }

  isSamePass(e) {
    const passwordInput = document.getElementById('passConf');
    const confirmPasswordInput = e.target;

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
      confirmPasswordInput.style.borderColor = `green`;
      this.error.style.display = 'none';
      return true
    } else {
      confirmPasswordInput.style.borderColor = 'red';
      this.error.style.display = 'block';
      return false
    }
  }
}

const inputs = document.querySelectorAll('.input');

inputs.forEach((input) => {
  var check;
  input.children[1].addEventListener('focusin', () => {
    check = new CheckInput(input);
    check.isValide();
  });
});

class CheckInput {
  constructor(element, button = '') {
    this.style = getComputedStyle(document.body);
    const titleWindow = ((document.head.baseURI).split('/')[4]).split('.')[0];
    this.titleWindow = titleWindow;
    this.pass = document.querySelector('.pass');
    this.element = element || '';
    this.title = element.children[0] || '';
    this.input = element.children[1] || '';
    this.error = element.children[2] || '';
    this.navButton = button || '';
  }

  validation(e) {
    const isEmpty = e.target.value === null || e.target.value === undefined || e.target.value === '' || e.target.value.trim() === '' || e === false;

    if (this.titleWindow === 'admin') {
      if (isEmpty) {
        this.error.style.display = 'block';
        this.input.style.borderColor = 'red';
        this.navButton.style.backgroundColor = `#e4e4e4`;
        this.navButton.style.color = `#a7a7a7`;
        this.navButton.classList.add('preventDefault');
      } else {
        this.error.style.display = 'none';
        this.input.style.borderColor = this.style.getPropertyValue('--bs-gray-400');
        this.navButton.style.backgroundColor = `#1aa47d`;
        this.navButton.style.color = `white`;
        this.navButton.classList.remove('preventDefault');
      }
    } else {
      if (isEmpty) {
        this.error.style.display = 'block';
        this.input.style.borderColor = 'red';
      } else {
        this.error.style.display = 'none';
        this.input.style.borderColor = this.style.getPropertyValue('--bs-gray-400');
      }
    }
  }

  isValide() {
    if (this.input.type !== 'select-one') {
      this.input.addEventListener('focusout', (e) => {
        this.validation(e);
      });
    }
  }

  isSamePass(e) {
    const passwordInput = document.getElementById('passConf');
    const confirmPasswordInput = e.target;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password === confirmPassword) {
      confirmPasswordInput.style.borderColor = `green`;
      this.error.style.display = 'none';
      return true;
    } else {
      confirmPasswordInput.style.borderColor = 'red';
      this.error.style.display = 'block';
      return false;
    }
  }
}

const inputs = document.querySelectorAll('.input') || '';
if (inputs != '') {
  inputs.forEach((input) => {
    var check;
    input.children[1].addEventListener('focusin', () => {
      check = new CheckInput(input);
      check.isValide();
    });
  });
}


const addSection = document.querySelectorAll(`.inputSection>.section>.inputGroup`) || ''
const navButton = document.querySelector('.navigationCours>input:nth-child(2)')


if (addSection != '' && navButton != '') {
  addSection.forEach((input) => {
    var check;
    input.addEventListener('focusin', () => {
      check = new CheckInput(input,navButton);
      check.isValide()
    })
  })
}

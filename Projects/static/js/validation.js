class CheckInput {
  style = getComputedStyle(document.body);
  titleWindow = ((document.head.baseURI).split('/')[4]).split('.')[0]
  pass = document.querySelector('.pass');
  
  constructor(element,button = '') {
    this.element = element || '';
    this.title = element.children[0] || '';
    this.input = element.children[1] || '';
    this.error = element.children[2] || '';
    this.navButton = button|| '';
  }

  validation(e) {
    if(this.titleWindow === 'admin'){
      if (
        e.target.value === null ||
        e.target.value === undefined ||
        e.target.value === '' ||
        e.target.value.trim() === '' ||
        e === false
      ) {
        this.error.style.display = 'block';
        this.input.style = 'border-color: red;';
        this.navButton.style.backgroundColor = `#e4e4e4`
        this.navButton.style.color = `#a7a7a7`
        this.navButton.classList.add('preventDefault')
      }
      else {
        this.error.style.display = 'none';
        this.input.style = `border-color: ${this.style.getPropertyValue('--bs-gray-400')};`;
        this.navButton.style.backgroundColor = `#1aa47d`
        this.navButton.style.color = `white`
        this.navButton.classList.remove('preventDefault')
      }
    }

    else{
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
  }

  isValide() {
    if (this.input.type != 'select-one'){
      this.input.addEventListener('focusout', (e) => {
        this.validation(e);
      });
    }
    return 
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

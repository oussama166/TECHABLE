class CheckInput {
  style = getComputedStyle(document.body)
  pattern = []
  constructor(element) {
    this.element = element;
    this.title = element.children[0];
    this.input = element.children[1];
    this.error = element.children[2];
  };

  validation(e) {
    if (e.target.value === null || e.target.value === undefined || e.target.value === '' || e.target.value.trim() === ''){
      this.error.style.display = `block`
      this.input.style = `border-color : red;`
    }
    else{
      this.error.style.display = `none`
      this.input.style = `border-color : ${this.style.getPropertyValue('--bs-gray-400')};`
    }
    
  }

  isValide() {
    this.input.addEventListener('focusout',(e)=>{
      this.validation(e)
    })
  }
};



const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
  input.children[1].addEventListener('focusin',()=>{
    const check  = new CheckInput(input)
    check.isValide()
  })
});
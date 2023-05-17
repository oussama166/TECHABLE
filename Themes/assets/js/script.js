// NAVBAR HUMBERGAR ON SM XSML MODE
const check = document.getElementById('checkbox4')
check.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.wrapper')
  if (e.target.checked) {
    wrapper.classList.add('wrapper-show')
    animateNavEleme()
    document.body.style = `overflow : hidden`
  }
  else {
    wrapper.classList.remove('wrapper-show')
    document.body.style = `overflow-x : visble;`
  }
})
// Animate the element on navbar XSM
const animateNavEleme = () => {
  const li = document.querySelectorAll('.wrapper>ul>li');
  var tl = gsap.timeline({ repeatDelay: 1 });
  li.forEach(elem => {
    console.log()
    if (elem.children.length === 1) {
      var tween = gsap.to(
        elem,
        {
          duration: .5,
          y: 100,
          x: 200,
          opacity: 15
        }
      );
      tl.add(tween)
    }
  })
}

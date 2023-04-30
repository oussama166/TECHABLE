// NAVBAR HUMBERGAR ON SM XSML MODE
const check = document.getElementById('checkbox4')
check.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.wrapper')
  if (e.target.checked) {
    wrapper.classList.add('wrapper-show')
    animateNavEleme()
  }
  else {
    wrapper.classList.remove('wrapper-show')
  }
})
// Animate the element on navbar XSM
const animateNavEleme = ()=>{
  const  li = document.querySelectorAll('.wrapper>ul>li');
  var tl = gsap.timeline({ repeatDelay: 1 });
  li.forEach(elem => {
    var tween = gsap.fromTo(
        elem,
        { x: 1000 },
        {
          duration: .5,
          x: 100,
          ease: "back"
        }
    );
    tl.add(tween)
  })
}

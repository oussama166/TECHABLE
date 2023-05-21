// NAVBAR HUMBERGAR ON SM XSML MODE
const check = document.getElementById('checkbox4')|''
if( check != ''){
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
}
// Animate the element on navbar XSM
const animateNavEleme = () => {
  const li = document.querySelectorAll('.wrapper>ul>li')|'';
  var tl = gsap.timeline({ repeatDelay: 1 })|'';
  if(li != ''){
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
}
// Remove choices 

function PermuteActiveState(name,trigger ='active') {
  let container = document.querySelectorAll(name);
  // var section = document.querySelectorAll('.containers');
  container.forEach(elem=>{
    elem.addEventListener('click',(e)=>{
      // Log Out from admin page
      if (e.target.innerText.split(' ') == 'LOGOUT'){
        window.location.href = '../../pages/home.html'
      }
      let choice = document.querySelector(`${name}.${trigger}`).classList[1]
      document.querySelector(`${name}.${trigger}`).classList.remove(trigger);
      document.querySelector(`.containers.${choice}`).classList.add('disable')
      e.target.classList.add(trigger);
      document.querySelector(`.containers.${e.target.classList[1]}`).classList.remove('disable') 
      document.querySelector(`.containers.addOn`).classList.add('activeContainer')
    })
  })
}

PermuteActiveState('.choices>.choice')

// Genarte name avatare
function generate() {
  const colors = [
    "#FF0000", // Red
    "#00FF00", // Lime Green
    "#0000FF", // Blue
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#008000", // Green
    "#FFC0CB", // Pink
    "#FF4500", // Orange Red
    "#FFD700", // Gold
    "#4B0082", // Indigo
    "#800000", // Maroon
    "#FF1493", // Deep Pink
    "#FF6347"  // Tomato
  ];


  // Generate a random index within the array length
  const randomIndex = Math.floor(Math.random() * colors.length);
  // Retrieve the random color using the random index
  var name = document.querySelector(".userName").innerHTML;
  console.log(name)
  var bcgColor = colors[randomIndex]
  var textColor = "#FFFF";
  // get name initials
  const myNames = name.split(" ");
  const initials = myNames.shift().charAt(0) + myNames.pop().charAt(0);
  const nameInitials = initials.toUpperCase();
  // show the hidden div
  var avatarDiv = document.querySelector(".avatarDiv");
  if (avatarDiv.style.display === "none") {
    avatarDiv.style.display = "block";
  }
  document.querySelector(".avatar").src = generateAvatar(
    nameInitials,
    textColor,
    bcgColor
  );
}

function generateAvatar(
  text,
  foregroundColor = "white",
  backgroundColor = "black"
) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 120;
  canvas.height = 120;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = "500 50px sans-serif";
  context.fillStyle = foregroundColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  return canvas.toDataURL("image/png");

}
generate()


// appear pass change$

function appearPassChange() {
  var span = document.getElementById('changePass');

  span.addEventListener('click',(e)=>{
    e.target.style.display = "none"
    document.querySelector('.changePassword').style.display = "block"
  })
  
}
appearPassChange()


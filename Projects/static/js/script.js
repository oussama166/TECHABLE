// NAVBAR HUMBERGAR ON SM XSML MODE

const check = document.getElementById("checkbox4") | "";
if (check != "") {
  check.addEventListener("click", (e) => {
    const wrapper = document.querySelector(".wrapper");
    if (e.target.checked) {
      wrapper.classList.add("wrapper-show");
      animateNavEleme();
      document.body.style = `overflow : hidden`;
    } else {
      wrapper.classList.remove("wrapper-show");
      document.body.style = `overflow-x : visble;`;
    }
  });
}

// Animate the element on navbar XSM

const animateNavEleme = () => {
  const li = document.querySelectorAll(".wrapper>ul>li") | "";
  var tl = gsap.timeline({ repeatDelay: 1 }) | "";
  if (li != "") {
    li.forEach((elem) => {
      console.log();
      if (elem.children.length === 1) {
        var tween = gsap.to(elem, {
          duration: 0.5,
          y: 100,
          x: 200,
          opacity: 15,
        });
        tl.add(tween);
      }
    });
  }
};

// Remove choices

function PermuteActiveState(name, trigger = "active") {
  let container = document.querySelectorAll(name);
  // var section = document.querySelectorAll('.containers');
  container.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      // Log Out from admin page
      if (e.target.innerText.split(" ") == "LOGOUT") {
        window.location.href = "../../pages/home.html";
      }
      let choice = document.querySelector(`${name}.${trigger}`).classList[1];
      document.querySelector(`${name}.${trigger}`).classList.remove(trigger);
      document.querySelector(`.containers.${choice}`).classList.add("disable");
      e.target.classList.add(trigger);
      document
        .querySelector(`.containers.${e.target.classList[1]}`)
        .classList.remove("disable");
      document
        .querySelector(`.containers.addOn`)
        .classList.add("activeContainer");
    });
  });
}

PermuteActiveState(".choices>.choice");

// show AddProccus

function getConcatenation(word) {
  var percentage = 0.5;
  var lastThreeLetters = word.slice(-3);
  var percentageLength = Math.round(word.length * percentage);
  var thirtyPercent = word.slice(0, percentageLength);
  return `${thirtyPercent}... .${lastThreeLetters}`;
}

// Genarte name avatare

function generate(size = 120) {
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
    "#FF6347", // Tomato
  ];

  // Generate a random index within the array length
  const randomIndex = Math.floor(Math.random() * colors.length);
  // Retrieve the random color using the random index
  var name = document.querySelector(".userName").innerHTML;
  console.log(name);
  var bcgColor = colors[randomIndex];
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
    bcgColor,
    size
  );
}
function generateAvatar(
  text,
  foregroundColor = "white",
  backgroundColor = "black",
  size = 120
) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = size;
  canvas.height = size;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  let font = (size != 120) ? (size * 0.5) : 50
  // Draw text
  context.font = `500 ${font}px sans-serif`;
  context.fillStyle = foregroundColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  return canvas.toDataURL("image/png");
}


// Create Course Element

// TODO : Create Element from THE BOM

function createCours(numberCours) {
  const parentElement = document.querySelector(".inputSection");

  for (let index = 0; index < numberCours; index++) {
    // Create elements
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("courGeanarate", "section", "disable");

    const heading = document.createElement("h1");
    heading.textContent = `Section ${index + 1} :`;

    const hr = document.createElement("hr");

    const inputGroup1 = document.createElement("div");
    inputGroup1.classList.add("inputGroup");

    const label1 = document.createElement("label");
    label1.setAttribute("for", `sectionCoursTitle${index + 1}`);
    label1.textContent = "Title";

    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", `sectionCoursTitle${index + 1}`);
    input1.setAttribute("id", `sectionCoursTitle${index + 1}`);
    input1.setAttribute("placeholder", "e.g. 'Using models'");
    input1.setAttribute("autofocus", "");
    input1.setAttribute("required", "");

    const errorSpan1 = document.createElement("span");
    errorSpan1.classList.add("error", "disable");

    const errorIcon1 = document.createElement("i");
    errorIcon1.classList.add("fa-solid", "fa-circle-exclamation");

    const errorText1 = document.createTextNode("This field is required");

    errorSpan1.appendChild(errorIcon1);
    errorSpan1.appendChild(errorText1);

    const inputGroup2 = document.createElement("div");
    inputGroup2.classList.add("inputGroup");

    const label2 = document.createElement("label");
    label2.setAttribute("for", `sectionCoursDescription${index + 1}`);
    label2.textContent = "Add Description";

    const textarea = document.createElement("textarea");
    textarea.setAttribute("name", `sectionCoursDescription${index + 1}`);
    textarea.setAttribute("id", `sectionCoursDescription${index + 1}`);
    textarea.setAttribute(
      "placeholder",
      "e.g. 'Learn how to use models on django and create database...'"
    );
    textarea.setAttribute("autofocus", "");
    textarea.setAttribute("rows", "15");
    textarea.setAttribute("cols", "15");
    textarea.setAttribute("required", "");

    const errorSpan2 = document.createElement("span");
    errorSpan2.classList.add("error", "disable");

    const errorIcon2 = document.createElement("i");
    errorIcon2.classList.add("fa-solid", "fa-circle-exclamation");

    const errorText2 = document.createTextNode("This field is required");

    errorSpan2.appendChild(errorIcon2);
    errorSpan2.appendChild(errorText2);

    const inputGroup3 = document.createElement("div");
    inputGroup3.classList.add("inputGroup");

    const label3 = document.createElement("label");
    label3.setAttribute("for", `sectionCoursVedo${index + 1}`);
    label3.textContent = "Upload cours";

    const fileLabel = document.createElement("label");
    fileLabel.classList.add("file");

    const fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("id", "file");
    fileInput.setAttribute("name", `file${index+1}`);
    fileInput.setAttribute("aria-label", "File browser example");

    const fileSpan = document.createElement("span");
    fileSpan.classList.add("file-custom");

    const errorSpan3 = document.createElement("span");
    errorSpan3.classList.add("error", "disable");

    const errorIcon3 = document.createElement("i");
    errorIcon3.classList.add("fa-solid", "fa-circle-exclamation");

    const errorText3 = document.createTextNode("This field is required");

    errorSpan3.appendChild(errorIcon3);
    errorSpan3.appendChild(errorText3);

    // Append elements
    inputGroup1.appendChild(label1);
    inputGroup1.appendChild(input1);
    inputGroup1.appendChild(errorSpan1);

    inputGroup2.appendChild(label2);
    inputGroup2.appendChild(textarea);
    inputGroup2.appendChild(errorSpan2);

    fileLabel.appendChild(fileInput);
    fileLabel.appendChild(fileSpan);

    inputGroup3.appendChild(label3);
    inputGroup3.appendChild(fileLabel);
    inputGroup3.appendChild(errorSpan3);

    sectionDiv.appendChild(heading);
    sectionDiv.appendChild(hr);
    sectionDiv.appendChild(inputGroup1);
    sectionDiv.appendChild(inputGroup2);
    sectionDiv.appendChild(inputGroup3);

    // Append the generated structure to the desired location in the DOM
    parentElement.appendChild(sectionDiv);
  }
}

// appear pass change

function appearPassChange() {
  var span = document.getElementById("changePass");

  span.addEventListener("click", (e) => {
    e.target.style.display = "none";
    document.querySelector(".changePassword").style.display = "block";
  });
}

const addProccus = () => {
  let add = document.querySelectorAll(".section");
  let buttonNav =
    document.querySelectorAll(".navigationCours>.buttonNav") || "";
  var counter = 0;
  let addLen = add.length - 1;
  let numberCourse = document.querySelector("#coursSections");
  console.log(buttonNav);
  buttonNav[0].addEventListener("click", () => {
    if (counter == addLen) {
      // Toogle from contunie to confirm
      buttonNav[1].classList.remove("disable");
      buttonNav[2].classList.add("disable");
    }

    if (counter <= 0) {
      add[counter].classList.add("disable");
      add[0].classList.remove("disable");
    } else {
      add[counter].classList.add("disable");
      add[counter - 1].classList.remove("disable");
      --counter;
    }
  });

  buttonNav[1].addEventListener("click", () => {
    console.log(
      `The length of element is : ${addLen}\nThe counter is : ${counter}`
    );
    if (counter >= addLen) {
      // Toogle from contunie to confirm
      buttonNav[1].classList.add("disable");
      buttonNav[2].classList.toggle("disable");

      add[addLen].classList.remove("disable");
      console.warn("im the last element pelease top??");
    } else {
      console.log(counter);
      add[counter].classList.add("disable");
      add[counter + 1].classList.remove("disable");
      ++counter;
    }
  });

  buttonNav[2].addEventListener("click", () => {
    const lottie = document.querySelector("lottie-player");
    const inputSecction = document.querySelector(".inputSection");

    buttonNav[0].classList.add("disable");
    buttonNav[2].classList.add("disable");
    inputSecction.classList.add("disable");

    document.querySelector(".doneSection").classList.remove("disable");
    lottie.play();
  });

  numberCourse.addEventListener("change", (e) => {
    if (e.target.value == "undefined") {
      addLen += 0;
    } else {
      addLen += parseInt(e.target.value);
      createCours(parseInt(e.target.value));
      add = document.querySelectorAll(".section");

      let fileLabels = document.querySelectorAll("#file");
      let fileCustom = document.querySelectorAll(".file-custom");

      fileLabels.forEach((elem, index) =>
        elem.addEventListener("change", (e) => {
          var value = e.target.files[0].name;
          fileCustom[index].innerText = getConcatenation(value);
        })
      );
    }
  });
};

function progrssState(){
  const state =document.querySelectorAll('.user-card-difculty>*');
  const levelState = ["beginner","intermidate","advanced"]
  state.forEach((elem)=>{
    console.log(elem.innerHTML)
    if(elem.innerHTML === levelState[0]){
      elem.style =`
        color : white;
        background-color : green;
      `

    }
    else if(elem.innerHTML == levelState[1]){
      elem.style =`
        color : white;
        background-color : #ffc107;
      `
    }
    else {
      elem.style =`
      color : white;
      background-color : #b30000;
    `
    }
  })
}


const href = (window.location.href).split("/")
console.log(href)


if( href.includes("user") ){
  generate(50)
  progrssState()
  console.log("hello you are in userHome");
}
else if ( href.includes("admins") ){
  generate()
  appearPassChange()
  addProccus()
}


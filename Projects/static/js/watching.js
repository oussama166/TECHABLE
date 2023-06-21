/*

TODO : FIXE FUNCTION GETSIZEOFVIDEO LINE[ 63-> 85 ] DECLARATION [ 99 ]

*/





const back = document.querySelector(".move-back");
const next = document.querySelector(".move-next");
const total = parseInt(document.querySelector(".total").innerHTML);
const pourcentage = document.querySelector(".details-about-progress > span");

let counter = 0;
let currentStep = 1;
const steps = 100 / total;

let detailCrs = document.querySelectorAll(".detail-course-vedio");
let detailInfo = document.querySelectorAll(".details-info");

function hideElements() {
  detailInfo.forEach((elem) => {
    elem.classList.add("hide");
  });
}

function showElement(index) {
  detailInfo[index].classList.remove("hide");
}

function updateProgressBar() {
  counter = currentStep * steps;
  pourcentage.innerHTML = `${counter}% Complete`;
  const progressWidth = `${counter}%`;
  document.styleSheets[0].addRule(
    ".details-about-progress .progress::after",
    `width: ${progressWidth}`
  );
}

function generateArrays() {
  totalspan = parseInt(total);
  detailCrs = [];
  detailInfo = [];

  for (let i = 0; i < totalspan; i++) {
    const crs = document.querySelector(
      `.detail-course-vedio[data-number="${i + 1}"]`
    )
    crs.parentElement.classList.remove("hide")
    const info = document.querySelector(
      `.details-info[data-number="${i + 1}"]`
    );

    if (crs && info) {
      detailCrs.push(crs);
      detailInfo.push(info);
    }
  }
}

// function GetVideoSize() {
//   const vds = document.querySelectorAll('video');
//   const names = document.querySelectorAll('.video-name');
//   console.log(names[1])
  
//   vds.forEach((vs, index) => { 
//       let duration = parseFloat(vs.duration);
      
//       if (isNaN(duration)) {
//         console.log('Invalid duration for video', vs);
//         return;
//       }
      
//       let hours = (duration / 3600);
//       let minutes = (duration % 3600) / 60;
//       let seconds = duration % 60;
//       let format = `(${hours.toFixed(2)} : ${minutes.toFixed(2)} : ${seconds.toFixed(2)})`;
      
//       console.log(format);
//       names[index].childNodes[1].innerHTML = format
//     });
// }

function changeState(index, i) {
  detailCrs[index].childNodes[1].childNodes[1].classList[1] = "";
  detailCrs[index].childNodes[1].childNodes[1].classList.add("fa-check-circle");
  detailCrs[index].classList.remove("active");
  detailCrs[index].classList.add("complete");
  detailCrs[i].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  hideElements();
  showElement(0);
  updateProgressBar();
  generateArrays()
  // GetVideoSize()
});

detailCrs.forEach((vid, index) => {
  vid.addEventListener("click", () => {
    hideElements();
    showElement(index);
    currentStep = index + 1;
    updateProgressBar();

    if (currentStep === 1) {
      back.classList.add("hide");
    } else {
      back.classList.remove("hide");
    }
  });
});

next.addEventListener("click", () => {
  if (currentStep < total) {
    hideElements();
    currentStep++;
    showElement(currentStep - 1);
    updateProgressBar();
    changeState(currentStep - 2, currentStep - 1);
    back.classList.remove("hide");
  }

  if (currentStep === total) {
    next.classList.add("hide");
  }
});

back.addEventListener("click", () => {
  if (currentStep > 1) {
    hideElements();
    currentStep--;
    showElement(currentStep - 1);
    updateProgressBar();
    changeState(currentStep, currentStep - 1);
    next.classList.remove("hide");
  }

  if (currentStep === 1) {
    back.classList.add("hide");
  }
});


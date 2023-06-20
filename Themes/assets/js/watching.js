const detailCrs = document.querySelectorAll(".detail-course-vedio");
const detailInfo = document.querySelectorAll(".details-info");
const back = document.querySelector(".move-back");
const next = document.querySelector(".move-next");

const state = ["fa-circle-play", "fa-circle-check", "fa-circle-check"];
const total = document.querySelector('.total').innerHTML;
const pourcantage = document.querySelector('.details-about-progress>span');


document.addEventListener("DOMContentLoaded", () => {
  back.classList.add("hide");
});

detailCrs.forEach((vid) => {
  vid.addEventListener("click", (e) => {
    changeVisblity();
    detailInfo[vid.dataset.number - 1].classList.remove("hide");
    if (vid.dataset.number == 1) {
      back.classList.add("hide");
    } else {
      back.classList.remove("hide");
    }
  });
});

function changeVisblity() {
  detailInfo.forEach((elem) => {
    if (!elem.classList.contains("hide")) {
      elem.classList.add("hide");
    }
  });
}
function changeState(index, i) {
  detailCrs[index].childNodes[1].childNodes[1].classList.add(state[1]);
  detailCrs[index].classList.remove("active");
  detailCrs[index].classList.add("complete");
  detailCrs[i].classList.add("active");
}

let i = 0;
next.addEventListener("click", () => {
  detailInfo.forEach((elem, index) => {
    if (!elem.classList.contains("hide") && i < detailInfo.length - 1) {
      elem.classList.add("hide");
      i = index + 1;
      changeState(index, i);
      progressBar()
    }
    if (index == i && i < detailInfo.length) {
      elem.classList.remove("hide");
    }
    if (i == 1) {
      back.classList.remove("hide");
    }
  });
});

back.addEventListener("click", () => {
  let currentIndex = 0;

  detailInfo.forEach((elem, index) => {
    if (!elem.classList.contains("hide")) {
      elem.classList.add("hide");
      currentIndex = index;
    }
  });

  const previousIndex =
    (currentIndex - 1 + detailInfo.length) % detailInfo.length;
  detailInfo[previousIndex].classList.remove("hide");

  if (previousIndex === 0) {
    back.classList.add("hide");
  }
});


let counter = 32

function progressBar(){
    let steps = 272/parseInt(total);
    counter +=steps 
    pourcantage.innerHTML = `${ Math.round((counter*100)/272)}% Complete`;
    let progress = `width: ${counter}px; `;
    document.styleSheets[0].addRule(".details-about-progress .progress::after", progress);

}
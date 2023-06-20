// Select the HTML5 video
const video = document.querySelector("#video");

const controls = document.querySelector(".controls");
video.addEventListener("mouseout", (e) => {
  setTimeout(() => {
    controls.style = `opacity : 0;`;
  }, 1000);
});
video.addEventListener("mouseover", (e) => {
  setInterval(() => {
    controls.style = `opacity : 0.5;`;
  }, 1000);
});

// set the pause button to display:none by default
document.querySelector(".fa-pause").style.display = "none";
// update the progress bar
video.addEventListener("timeupdate", () => {
  let curr = (video.currentTime / video.duration) * 100;
  if (video.ended) {
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
  }
  document.querySelector(".inner").style.width = `${curr}%`;
});
// pause or play the video
const play = (e) => {
  // Condition when to play a video
  if (video.paused) {
    document.querySelector(".fa-play").style.display = "none";
    document.querySelector(".fa-pause").style.display = "block";
    video.play();
  } else {
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
    video.pause();
  }
};
// trigger fullscreen
const fullScreen = (e) => {
  e.preventDefault();
  video.requestFullscreen();
};
// download the video
const download = (e) => {
  e.preventDefault();
  let a = document.createElement("a");
  a.href = video.src;
  a.target = "_blank";
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
// rewind the current time
const rewind = (e) => {
  video.currentTime = video.currentTime - (video.duration / 100) * 5;
};
// forward the current time
const forward = (e) => {
  video.currentTime = video.currentTime + (video.duration / 100) * 5;
};
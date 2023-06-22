// Flipp button
const StartAnimation = document.querySelector(".container-getStart");
console.log(StartAnimation);

const getStart = () => {
    const firstElemt = StartAnimation.childNodes[1];
    const secondElemt = StartAnimation.childNodes[3];

    gsap.to(StartAnimation, {
        borderRadius: "50%",
        width: "50px",
        height: "50px",
    });
    gsap.to(firstElemt, { y: "-100px" });

    gsap.to(secondElemt, { y: "-25px" });
};

const getStop = () => {
    const firstElemt = StartAnimation.childNodes[1];
    const secondElemt = StartAnimation.childNodes[3];

    gsap.to(StartAnimation, {
        borderRadius: "20px",
        width: "200px",
        height: "70px",
    });
    gsap.to(firstElemt, { y: "10px" });
    gsap.to(secondElemt, { y: "100px" });
};

StartAnimation.addEventListener("mouseover", getStart);
StartAnimation.addEventListener("mouseout", getStop);

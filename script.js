const linkContainer = document.querySelector(".link-container");
const pictureElement = document.querySelector(".picture");
const myName = document.querySelector(".my-name");
const infoText = document.querySelector(".info-text");
const link1 = document.querySelector(".project-folder-link-1");
const link2 = document.querySelector(".project-folder-link-2");
const link3 = document.querySelector(".project-folder-link-3");
const infoFlex = document.querySelector(".information-flex")
var images = {
    img0: "863992.png",
    img1: "717608.png",
    img2: "996677.jpg",
    img3: "1067764.png"
};

linkContainer.addEventListener("mouseover", e => {
    pictureElement.src = images.img0;
});

infoFlex.addEventListener("mouseover", e => {
    pictureElement.src = images.img0;
});

link1.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img1;
});

link2.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img2;
});

link3.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img3;
});



const body = document.querySelector(".body");
const linkContainer = document.querySelector(".link-container");
const pictureElement = document.querySelector(".picture");
const myName = document.querySelector(".my-name");
const infoText = document.querySelector(".info-text");
const link1 = document.querySelector(".project-folder-link-1");
const link2 = document.querySelector(".project-folder-link-2");
const link3 = document.querySelector(".project-folder-link-3");
const infoFlex = document.querySelector(".information-flex")
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
var images = {
    img0: "863992.png",
    img1: "717608.png",
    img2: "996677.jpg",
    img3: "1067764.png"
};

body.addEventListener("mouseover", e => {
    pictureElement.src = images.img0;
    list1.style.opacity = 1;
    list2.style.opacity = 1;
    list3.style.opacity = 1;

});

link1.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img1;
    list1.style.opacity = 0;
    link1.innerHTML = 
    '<button class="link-button-1">ohhh</button>';
    
});

link2.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img2;
    list2.style.opacity = 0;
    link2.innerHTML = 
    '<button class="link-button-2">ohhh</button>';
});

link3.addEventListener("mouseover", e => {
    e.stopPropagation();
    pictureElement.src = images.img3;
    list3.style.opacity = 0;
    link3.innerHTML = 
    '<button class="link-button-3">ohhh</button>';
});



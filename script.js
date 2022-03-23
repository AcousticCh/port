const pictureElement = document.querySelector(".picture");
const myName = document.querySelector(".my-name");
const infoText = document.querySelector(".info-text");

function changeInfoBox(imgElement, titleElement, infoElement){
    imgElement.src = "1067764.png";
    titleElement.style.border = "5px solid red";
    infoElement.style.border = "5px solid red";
}
changeInfoBox(pictureElement, myName, infoText)

//mousover event listener
const nodePrevButton = document.querySelector(".prev");
const nodeImage = document.querySelector(".test-slider");
const nodeNextButton = document.querySelector(".next");

console.log(nodeImage);

let images = [
    "images/backend.svg",
    "images/frontend.svg",
    "images/logo.svg",
    "images/UI.svg",

]

let currentIndex = 0;

nodePrevButton.addEventListener("click",()=>{
    if (currentIndex===0){
        currentIndex=images.length-1
    }else {
        currentIndex--;
    }
    nodeImage.setAttribute("src",images[currentIndex])
})

nodeNextButton.addEventListener("click",()=>{
    if (currentIndex===images.length-1){
        currentIndex=0;
    }else {
        currentIndex++;
    }
    nodeImage.setAttribute("src",images[currentIndex])
})
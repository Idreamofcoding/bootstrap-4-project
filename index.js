const modal = document.querySelector(".modal")
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const newColor = document.getElementById('changeColor');

window.setTimeout(() => {
    modal.style.visibility = "visible";
}, 7000)

function hideModal() {
    modal.style.visibility = "hidden";
}

// JS for COLOR CHANGE
// JS for COLOR CHANGE
// JS for COLOR CHANGE
// JS for COLOR CHANGE
// JS for COLOR CHANGE
// JS for COLOR CHANGE
// JS for COLOR CHANGE
// function changeWithInterval() {
//     const randomNumber = getRandomNumber();
//     newColor.style.color = colors[randomNumber];
//     }
//     function getRandomNumber() {
//         return Math.floor(Math.random() * colors.length);
//     }
//     setInterval(changeWithInterval, 2000)
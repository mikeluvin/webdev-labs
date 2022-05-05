const makeBigger = () => {
   changeFontSize("h1", 2);
   changeFontSize(".content", 2);
};

const makeSmaller = () => {
   changeFontSize("h1", -2);
   changeFontSize(".content", -2);
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

const changeFontSize = (tag, diff) => {
   var elem = document.querySelector(tag);
   var currSize = parseFloat(window.getComputedStyle(elem, null).getPropertyValue('font-size'))
   elem.style.fontSize = (currSize + diff) + "px";
}
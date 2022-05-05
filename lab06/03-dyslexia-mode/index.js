/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const dyslexiaClass = "dyslexia-mode";
const containerElem = document.querySelector(".container");
const toggleElem = document.querySelector("#dyslexia-toggle");
// if true when we first load the page, add .dyslexia-mode class
if (window.localStorage.getItem('dyslexic') === 'true') {
  containerElem.classList.add(dyslexiaClass);
  toggleElem.setAttribute('aria-pressed', 'true');
}

const toggleDyslexia = (e) => {
  containerElem.classList.toggle(dyslexiaClass);
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', String(!pressed));
  window.localStorage.setItem('dyslexic', String(!pressed));
}

toggleElem.addEventListener('click', toggleDyslexia);
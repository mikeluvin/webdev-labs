/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const makeDefault = () => {
   changeTheme(null);
}
const makeDesert = () => {
   changeTheme("desert");
}
const makeOcean = () => {
   changeTheme("ocean");
}
const makeHighContrast = () => {
   changeTheme("high-contrast");
}

const changeTheme = (theme) => {
   const allThemes = ["desert", "ocean", "high-contrast"]
   // remove existing themes
   for (const oldTheme of allThemes) {
      document.querySelector(".container").classList.remove(oldTheme);
   }
   if (theme) {
      document.querySelector(".container").classList.add(theme);
   }
}


document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeHighContrast);
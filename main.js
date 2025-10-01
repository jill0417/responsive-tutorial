const modeButton = document.getElementById("modeButton");
// this will keep track od dark vs light mode
let isLightMode = true;

// function to toggle between dark mode and light mode
// takes in bool : if true set to dark if false set to light
function switchModes(toDark) {
  if (toDark) {
    modeButton.textContent = "Light Mode";
    isLightMode = false;
  } else {
    modeButton.textContent = "Dark Mode";
    isLightMode = true;
  }
}

modeButton.addEventListener("click", () => {
  switchModes(isLightMode);
});

// test to see if user prefers dark mode
// if so update the lightmode variable, and our button text
let userModePreference = window.matchMedia("(prefers-color-scheme: dark)");
console.log(userModePreference.matches);
if (userModePreferenc.matches) {
  isLightMode = false;
  switchModes(isLightMode);
}

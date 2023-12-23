const secondnavOverlay = document.getElementById("rightNavOverlay");
const rightNav = document.getElementById("rightNav");

const buttonMenu = document.getElementById("buttonMenu");

// open or close menu
secondnavOverlay.addEventListener("click", () => {
  secondnavOverlay.classList.add("d-none");
  rightNav.classList.add("d-none");
});

buttonMenu.addEventListener("click", () => {
  secondnavOverlay.classList.remove("d-none");
  rightNav.classList.remove("d-none");
});

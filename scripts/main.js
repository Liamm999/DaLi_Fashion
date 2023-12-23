const closeRightNav = document.getElementById("rightNavOverlay");
const rightNav = document.getElementById("rightNav");

const buttonMenu = document.getElementById("buttonMenu");

// open or close menu
closeRightNav.addEventListener("click", () => {
  closeRightNav.classList.add("d-none");
  rightNav.classList.add("d-none");
});

buttonMenu.addEventListener("click", () => {
  closeRightNav.classList.remove("d-none");
  rightNav.classList.remove("d-none");
});

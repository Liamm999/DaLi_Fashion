const secondnavOverlay = document.getElementById("rightNavOverlay");
const rightNav = document.getElementById("rightNav");

const buttonMenu = document.getElementById("buttonMenu");

const user = localStorage.getItem("user");
const headerAuth = document.querySelectorAll(".headerAuth");
const headerProfile = document.querySelectorAll(".headerProfile");
const headerLogout = document.querySelectorAll(".headerLogout");

// open or close menu
secondnavOverlay.addEventListener("click", () => {
  secondnavOverlay.classList.add("d-none");
  rightNav.classList.add("d-none");
});

buttonMenu.addEventListener("click", () => {
  secondnavOverlay.classList.remove("d-none");
  rightNav.classList.remove("d-none");
});

// if user logged in -> show user profile and logout
// else show sing in/ sign up buttons
if (user) {
  headerAuth.forEach((auth, index) => {
    auth.classList.add("d-none");
    headerProfile[index].classList.remove("d-none");
  });
} else {
  headerAuth.forEach((auth, index) => {
    auth.classList.remove("d-none");
    headerProfile[index].classList.add("d-none");
  });
}

headerLogout.forEach((logout) => {
  logout.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.reload();
  });
});

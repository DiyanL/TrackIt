const loginButton = document.getElementById("login-button");
const loginModal = document.getElementById("login-modal");
const closeButton = document.querySelector(".close-button");
const loginForm = document.getElementById("login-form");

loginButton.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  loginModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  alert(`Logged in with Email: ${email}`);
  loginModal.style.display = "none";
});

document.getElementById("signup-link").addEventListener("click", (event) => {
  event.preventDefault();
  alert("Sign Up functionality coming soon!");
});

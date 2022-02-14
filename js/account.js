let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");

loginBtn.onclick = () => {
  registerBtn.classList.remove("active");
  loginBtn.classList.add("active");
  document.querySelector(".account-form .login-form").classList.add("active");
  document
    .querySelector(".account-form .register-form")
    .classList.remove("active");
};

registerBtn.onclick = () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  document
    .querySelector(".account-form .login-form")
    .classList.remove("active");
  document
    .querySelector(".account-form .register-form")
    .classList.add("active");
};
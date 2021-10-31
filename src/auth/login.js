import { navbarController } from "../home";

function handleLoginBtn() {
  const loginBtn = document.getElementById("login-spotify");
  const email = document.querySelector(".login-email");
  const password = document.querySelector(".login-password");
  loginBtn.onclick = function () {
    try {
      if (email.value && password.value) {
        handleLogindetails(email.value, password.value);
      } else {
        alert("enter value");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

function handleLogindetails(email, password) {
  let credential = false;
  return fetch("http://localhost:8000/users")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((element) => {
        if (email == element.email && password == element.password) {
          credential = true;
          alert("succesful");
        }
      });
      if (credential) {
        window.location.href = "./player.html";
      } else {
        return alert("invalid credential");
      }
    });
}
if (window.location.href == "http://localhost:8080/login.html") {
  handleLoginBtn();
  // return navbarController();
}

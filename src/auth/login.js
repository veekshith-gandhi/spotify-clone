function handleLoginBtn() {
  const loginBtn = document.querySelector(".login-btn-signup");
  const email = document.querySelector(".login-email");
  const password = document.querySelector(".login-password");
  loginBtn.addEventListener("click", () => {
    handleLogindetails(email.value, password.value);
  });
}

function handleLogindetails(email, password) {
  return fetch("http://localhost:8000/users")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((element) => {
        if (email == element.email && password == element.password) {
          window.location.href = "./signup.html";
        }
      });
    });
}

window.addEventListener("load", handleLoginBtn);

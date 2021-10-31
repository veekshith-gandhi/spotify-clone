import { signUpcontroller } from "./auth/signup";
import "./auth/login";
import "./styles/style.css";
// import * as Home from "./home";
import "./auth/player";
import { navbarController } from "./home";

window.onload = () => {
  if (window.location.href.includes("signup")) {
    console.log("im in signin");
    return signUpcontroller();
  }

  if (window.location.href.includes("download")) {
    console.log("im in download");
    return navbarController();
  }
  if (window.location.href.includes("support")) {
    console.log("im in download");
    return navbarController();
  }
  if (window.location.href.includes("player")) {
    // return navbarController();
    console.log("entered");
  }
  if (
    window.location.href == "http://localhost:8080/" ||
    window.location.href == "http://localhost:8080/index.html"
  ) {
    return navbarController();
  }
};

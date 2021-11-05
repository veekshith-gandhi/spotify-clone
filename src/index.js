import { signUpcontroller } from "./auth/signup";
import { playerBody, playerBody2 } from "./auth/player";
import "./auth/login";
import "./styles/style.css";
import "./shared/webplayerbody";
import { navbarController } from "./home";
import {supportController} from "./support.js";
import search from "./search.js";

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
    console.log("im in Support");
    supportController();
    return navbarController();
  }

  if (window.location.href.includes("player")) {
    return playerBody();
  }
  if(window.location.href.includes("search")){
    // playerBody();
    search();
  }
  if (window.location.href.includes("musicpage")) {
    return playerBody2();
  }

  if (window.location.href.includes("premium")) {
    return navbarController();
  }

  if (
    window.location.href == "http://localhost:8080/" ||
    window.location.href == "http://localhost:8080/index.html"
  ) {
    return navbarController();
  }
};

import { signUpcontroller } from "./auth/signup";
import "./auth/login";
import "./styles/style.css";
import * as Home from "./home";
import "./auth/source";

window.onload = () => {
  if (window.location.href.includes("signup")) {
    return signUpcontroller();
  }
};


import { signUpcontroller } from "./auth/signup";
import "./auth/login";
import "./styles/style.css";

window.onload = () => {
  if (window.location.href.includes("signup")) {
    return signUpcontroller();
  }
};

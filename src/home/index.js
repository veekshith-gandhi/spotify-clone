import Navbar from "./navbar.js";
import Footer from "./footer.js";

export const navbarController = () => {
  const navbar = Navbar();
  const navbarContainer = document.getElementById("navbarContainer");
  navbarContainer.innerHTML = navbar;

  const footer = Footer();
  const footerContainer = document.getElementById("footerContainer");
  footerContainer.innerHTML = footer;
};

import { DOMElementGenerator } from "../shared/dom.helper";
import { handleSignUp } from "./api";

const model = {
  formDataValues: [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email.",
      label: "What's your email?",
      errMsg: "You need to enter your email.",
    },
    {
      name: "confirmEmail",
      type: "email",
      placeholder: "Enter your email again.",
      label: "Confirm your email",
      errMsg: "You need to confirm your email.",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Create a password",
      label: "Create a password",
      errMsg: "You need to enter a password.",
    },
    {
      name: "profileName",
      type: "text",
      placeholder: "Enter a profile name",
      label: "What should we call you?",
      errMsg: "Enter a name for your profile.",
    },
  ],
};

const view = {
  rootElement: document.querySelector(".signup-main-container"),
  mainContainer: DOMElementGenerator.createDivElement(
    "container mt-5 ",
    null,
    null
  ),

  logoContainer: document.createElement("a"),
  heading: document.createElement("h2"),
  signUpWithFBBtn: DOMElementGenerator.createButtonElement(
    "Sign up with Facebook",
    null,
    "p-2 pl-3 pr-3 m-auto"
  ),
  hrRule: DOMElementGenerator.createHorizontalRuleWithTitle("or"),
  formContainer: document.createElement("form"),
  submitBtn: DOMElementGenerator.createButtonElement(
    "Sign up",
    "#1ED760",
    "m-auto p-2 pl-5 pr-5 signup__btn "
  ),
  termsAndCondition: ` <span class="LinkContainer">
  By clicking on sign-up, you agree to Spotify's
  <a
    href="/in-en/legal/end-user-agreement/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Terms and Conditions of Use
  </a>
</span>`,
  termsAndCondition2: `<span class="LinkContainer">To learn more about 
  how Spotify collects, uses, shares and protects your
   personal data, please see <a href="/in-en/legal/privacy-policy/" 
   target="_blank" rel="noopener noreferrer">Spotify's Privacy Policy</a>.
   </span>`,
  haveAnAccount: `<span class="LinkContainer text-center d-block mb-5">Have an account? 
   <a href="https://accounts.spotify.com?continue=https%3A%2F%2Fwww.spotify.com%2Faccount%2Foverview%2F">Log 
   in</a>.</span>`,
};

export const signUpcontroller = () => {
  const signUpContainer = view.mainContainer;
  const logoContainer = view.logoContainer;

  logoContainer.innerHTML = `<svg role="img" viewBox="0 0 78 24" height="40" ><path d="M18.871 10.64C15.056 8.35 8.764 8.139 5.122 9.256a1.105 1.105 0 0 1-1.38-.745 1.121 1.121 0 0 1 .737-1.396c4.18-1.283 11.13-1.035 15.522 1.6.526.316.699 1.002.387 1.533a1.1 1.1 0 0 1-1.517.392zm-.125 3.392a.917.917 0 0 1-1.269.307c-3.18-1.977-8.03-2.549-11.793-1.394a.922.922 0 0 1-1.151-.622.936.936 0 0 1 .615-1.163c4.298-1.319 9.642-.68 13.295 1.59.433.27.57.844.303 1.282zm-1.448 3.257a.732.732 0 0 1-1.014.248c-2.78-1.717-6.277-2.105-10.397-1.153a.737.737 0 0 1-.883-.561.745.745 0 0 1 .555-.893c4.508-1.042 8.375-.593 11.495 1.334a.75.75 0 0 1 .244 1.025zM11.871.034C5.334.034.036 5.39.036 11.997c0 6.608 5.298 11.963 11.835 11.963 6.536 0 11.835-5.355 11.835-11.963C23.706 5.39 18.407.034 11.87.034zm20.363 11.044c-2.043-.493-2.407-.838-2.407-1.565 0-.686.64-1.148 1.59-1.148.921 0 1.835.351 2.793 1.073.029.022.065.03.101.025a.132.132 0 0 0 .088-.055l.998-1.422a.137.137 0 0 0-.025-.184c-1.14-.925-2.424-1.374-3.925-1.374-2.206 0-3.747 1.338-3.747 3.253 0 2.054 1.33 2.78 3.627 3.342 1.955.455 2.285.837 2.285 1.519 0 .755-.667 1.225-1.741 1.225-1.193 0-2.166-.406-3.254-1.359a.132.132 0 0 0-.19.015l-1.119 1.346a.135.135 0 0 0 .013.188c1.267 1.143 2.824 1.746 4.504 1.746 2.378 0 3.914-1.313 3.914-3.345 0-1.718-1.015-2.668-3.505-3.28m10.61 2.302c0 1.45-.884 2.463-2.15 2.463-1.25 0-2.194-1.058-2.194-2.463 0-1.404.943-2.462 2.195-2.462 1.245 0 2.149 1.035 2.149 2.462zm-1.726-4.34c-1.03 0-1.876.411-2.573 1.252v-.946a.135.135 0 0 0-.133-.136h-1.83a.135.135 0 0 0-.134.136V19.86c0 .075.06.136.134.136h1.83a.135.135 0 0 0 .133-.136v-3.319c.698.791 1.543 1.177 2.573 1.177 1.915 0 3.853-1.49 3.853-4.338 0-2.849-1.938-4.34-3.853-4.34zm8.822 6.818c-1.312 0-2.3-1.065-2.3-2.478 0-1.418.954-2.448 2.27-2.448 1.32 0 2.315 1.066 2.315 2.48 0 1.417-.96 2.446-2.285 2.446zm0-6.817c-2.466 0-4.398 1.92-4.398 4.37 0 2.424 1.919 4.324 4.368 4.324 2.474 0 4.412-1.913 4.412-4.355 0-2.433-1.924-4.34-4.382-4.34zm9.648.169h-2.013V7.13a.134.134 0 0 0-.134-.136h-1.83a.135.135 0 0 0-.133.135V9.21h-.88a.134.134 0 0 0-.133.136v1.59c0 .074.06.135.133.135h.88v4.113c0 1.662.818 2.505 2.432 2.505.656 0 1.2-.137 1.714-.432a.135.135 0 0 0 .068-.117v-1.514a.136.136 0 0 0-.064-.115.133.133 0 0 0-.13-.006c-.353.18-.693.262-1.074.262-.587 0-.85-.27-.85-.873V11.07h2.014a.135.135 0 0 0 .134-.136v-1.59a.134.134 0 0 0-.134-.135m7.015.009v-.255c0-.752.285-1.088.925-1.088.381 0 .688.077 1.031.193a.133.133 0 0 0 .12-.02.135.135 0 0 0 .056-.11V6.38a.135.135 0 0 0-.095-.13 4.977 4.977 0 0 0-1.52-.22c-1.69 0-2.584.962-2.584 2.78v.392h-.879a.135.135 0 0 0-.134.135v1.598c0 .075.06.136.134.136h.88v6.344c0 .075.059.135.133.135h1.83c.073 0 .133-.06.133-.135V11.07h1.709l2.617 6.342c-.297.667-.59.8-.988.8-.323 0-.662-.098-1.01-.29a.136.136 0 0 0-.106-.01.136.136 0 0 0-.079.073l-.62 1.375a.135.135 0 0 0 .057.175 3.82 3.82 0 0 0 1.955.506c1.35 0 2.097-.636 2.756-2.348l3.174-8.291a.137.137 0 0 0-.014-.126.133.133 0 0 0-.11-.059h-1.905a.135.135 0 0 0-.127.091l-1.951 5.634-2.137-5.638a.133.133 0 0 0-.125-.087h-3.126m-4.067-.007h-1.83a.135.135 0 0 0-.133.136v8.069c0 .075.06.135.134.135h1.83c.073 0 .133-.06.133-.135v-8.07a.135.135 0 0 0-.134-.135m-.906-3.674a1.32 1.32 0 0 0-1.312 1.326 1.32 1.32 0 0 0 1.313 1.327 1.32 1.32 0 0 0 1.312-1.327c0-.733-.588-1.326-1.312-1.326m16.104 4.477H77.4v.432h.335c.167 0 .267-.083.267-.216 0-.141-.1-.216-.267-.216zm.217.616l.365.516h-.308l-.327-.473H77.4v.473h-.257V9.778h.602c.314 0 .521.163.521.436a.407.407 0 0 1-.314.415zm-.285-1.305c-.66 0-1.159.53-1.159 1.179 0 .648.496 1.171 1.152 1.171.66 0 1.16-.53 1.16-1.179 0-.648-.497-1.171-1.153-1.171zm-.007 2.48a1.29 1.29 0 0 1-1.287-1.301c0-.714.57-1.309 1.294-1.309a1.29 1.29 0 0 1 1.287 1.301c0 .714-.57 1.31-1.294 1.31z"></path></svg>`;
  logoContainer.className = "d-flex justify-content-center";
  logoContainer.href = "./index.html";

  const heading = view.heading;
  heading.className = "mt-4 heading__signup mb-4";
  heading.textContent = "Sign up for free to start listening.";

  //   Form
  const formContainer = view.formContainer;
  formContainer.setAttribute("autocomplete", "on");

  model.formDataValues.forEach((form) => {
    formContainer.appendChild(
      DOMElementGenerator.formInputElement(
        form.label,
        form.placeholder,
        form.errMsg,
        form.type,
        form.name
      )
    );
  });

  formContainer.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const formData = new FormData(formContainer);
    handleSignUp(formData);
  });

  formContainer.appendChild(
    DOMElementGenerator.createDateInput("What's your date of birth?")
  );

  formContainer.appendChild(
    DOMElementGenerator.createGenderElement("What's your gender?")
  );

  formContainer.appendChild(
    DOMElementGenerator.securityMessages(
      "I would prefer not to receive marketing messages from Spotify"
    )
  );
  formContainer.appendChild(
    DOMElementGenerator.securityMessages(
      "Share my registration data with Spotify's content providers for marketing purposes."
    )
  );

  const termsAndCondition = DOMElementGenerator.createDivElement("mt-3");
  termsAndCondition.innerHTML = view.termsAndCondition;

  const termsAndCondition2 = DOMElementGenerator.createDivElement("mt-3");
  termsAndCondition2.innerHTML = view.termsAndCondition2;

  const haveAnAccount = DOMElementGenerator.createDivElement("mt-3");
  haveAnAccount.innerHTML = view.haveAnAccount;

  formContainer.appendChild(termsAndCondition);
  formContainer.appendChild(termsAndCondition2);
  formContainer.appendChild(view.submitBtn);
  signUpContainer.appendChild(logoContainer);
  signUpContainer.appendChild(heading);
  signUpContainer.appendChild(view.signUpWithFBBtn);
  signUpContainer.appendChild(view.hrRule);
  signUpContainer.appendChild(formContainer);

  formContainer.appendChild(haveAnAccount);

  view.rootElement.appendChild(signUpContainer);
};

import { DomDateHelper } from "./dom.date";

export class DOMElementGenerator extends DomDateHelper {
  static createDivElement(className = "", id = "", child) {
    const divTag = document.createElement("div");
    if (className) {
      divTag.className = className;
    }
    if (id) {
      divTag.id = id;
    }
    if (child) {
      divTag.appendChild(child);
    }

    return divTag;
  }

  static createImageElement(src = "", className = "", width = "", height = "") {
    const img = document.createElement("img");
    if (className) {
      img.className = className;
    }
    if (width && height) {
      img.width = width;
      img.height = height;
    }

    img.src = src;

    return img;
  }

  static createButtonElement(name = "", bgColor = "", className = "") {
    const button = document.createElement("button");
    // Default styles related to app.
    button.style.borderRadius = "500px";
    button.className =
      "font-weight-bold pop-up-btn-animate btn btn-primary d-block ";

    button.textContent = name;

    if (bgColor) {
      button.style.backgroundColor = bgColor;
    }

    if (className) {
      button.className += className;
    }

    return button;
  }

  static createHorizontalRuleWithTitle(title = "") {
    const hrDiv = this.createDivElement("hr-with-title strike mt-4 mb-4");

    hrDiv.innerHTML = `
        <span>${title}</span>
     `;

    return hrDiv;
  }

  static formInputElement(
    label = "",
    placeholder = "",
    errMsg = "",
    type = "",
    formInputName = ""
  ) {
    const inputContainer = this.createDivElement("form-group");
    const labelTag = document.createElement("label");
    const errorTag = document.createElement("small");

    labelTag.textContent = label;
    errorTag.className = "form-text text-danger mt-0";

    const input = document.createElement("input");

    input.type = type || "text";
    input.className = "form-control";
    input.placeholder = placeholder;
    input.name = formInputName;

    if (errMsg) {
      input.onblur = (ev) => {
        if (!ev.target.value) {
          errorTag.textContent = errMsg;
          inputContainer.appendChild(errorTag);
        } else {
          errorTag.textContent = "";
        }
      };
    }

    inputContainer.appendChild(labelTag);
    inputContainer.appendChild(input);

    return inputContainer;
  }
}

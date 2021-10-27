export class DomDateHelper {
  static createDateInput(label = "") {
    const container = this.createDivElement("form-group");

    // Date container
    const dateContainer = this.createDivElement("row justify-content-between");
    const labeltag = document.createElement("label");
    labeltag.textContent = label;

    dateContainer.appendChild(this.monthContainer());
    dateContainer.appendChild(this.dayContainer());
    dateContainer.appendChild(this.yearContainer());

    container.appendChild(labeltag);
    container.appendChild(dateContainer);

    return container;
  }

  static monthContainer() {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUNE",
      "JULY",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC",
    ];
    const monthTag = document.createElement("label");

    // Month
    const monthContainer = this.createDivElement("form-group");
    const monthElement = document.createElement("select");
    monthElement.className = "form-control";

    months.forEach((month) => {
      const option = new Option(month, month, false, false);
      monthElement.appendChild(option);
    });

    monthElement.name = "month";

    monthTag.textContent = "Month";
    monthContainer.classList = "col-6";
    monthContainer.appendChild(monthTag);
    monthContainer.appendChild(monthElement);

    return monthContainer;
  }

  static dayContainer() {
    const dayTag = document.createElement("label");
    const dayContainer = this.createDivElement("form-group");
    const dayElement = document.createElement("input");
    dayElement.type = "tel";
    dayElement.className = "form-control ";
    dayElement.placeholder = "DD";
    dayElement.name = "day";
    dayTag.textContent = "Day";
    dayContainer.className = "col-3";
    dayContainer.appendChild(dayTag);
    dayContainer.appendChild(dayElement);

    return dayContainer;
  }

  static yearContainer() {
    const yearTag = document.createElement("label");
    const yearContainer = this.createDivElement("form-group");
    const yearElement = document.createElement("input");
    yearElement.type = "tel";
    yearElement.className = "form-control";
    yearElement.placeholder = "YYYY";
    yearElement.name = "year";
    yearTag.textContent = "Year";
    yearContainer.className = "col-3";

    yearContainer.appendChild(yearTag);
    yearContainer.appendChild(yearElement);

    return yearContainer;
  }
  static createGenderElement(label = "") {
    const mainContainer = this.createDivElement("form-group");

    const container = this.createDivElement("input-group");
    const labelTag = document.createElement("label");
    labelTag.textContent = label;
    mainContainer.appendChild(labelTag);

    container.appendChild(this.male());
    container.appendChild(this.female());
    container.appendChild(this.nonBinary());

    mainContainer.appendChild(container);
    return mainContainer;
  }
  static male() {
    const maleContainer = this.createDivElement("form-group col-2 pl-0");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "gender";
    input.value = "male";

    input.onclick = "changeEvent()";
    input.className = "mr-2 ";
    maleContainer.appendChild(input);

    const label = document.createElement("label");
    label.textContent = "Male";
    maleContainer.appendChild(label);

    return maleContainer;
  }
  static female() {
    const femaleContainer = this.createDivElement("form-group col-3");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "gender";
    input.value = "female";
    input.className = "mr-2";
    femaleContainer.appendChild(input);

    const label = document.createElement("label");
    label.textContent = "female";
    femaleContainer.appendChild(label);

    return femaleContainer;
  }
  static nonBinary() {
    const nonBinaryContainer = this.createDivElement("form-group col-4");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "gender";
    input.value = "non-binary";
    input.className = "mr-2";
    nonBinaryContainer.appendChild(input);

    const label = document.createElement("label");
    label.textContent = "Non-Binary";
    nonBinaryContainer.appendChild(label);

    return nonBinaryContainer;
  }

  static securityMessages(label = "") {
    const messageContainer = this.createDivElement("form-group");

    const container = this.createDivElement("form-group");
    const input = document.createElement("input");
    input.type = "checkbox";

    const labelMsg = document.createElement("label");
    labelMsg.textContent = label;
    labelMsg.className = "col-11";
    labelMsg.sty;

    container.appendChild(input);
    container.appendChild(labelMsg);
    messageContainer.appendChild(container);
    return messageContainer;
  }
}

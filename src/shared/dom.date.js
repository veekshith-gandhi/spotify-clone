export class DomDateHelper {
  static createDateInput(label = '') {
    const container = this.createDivElement('form-group');

    // Date container
    const dateContainer = this.createDivElement('row justify-content-between');
    const labeltag = document.createElement('label');
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
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUNE',
      'JULY',
      'AUG',
      'SEPT',
      'OCT',
      'NOV',
      'DEC',
    ];
    const monthTag = document.createElement('label');

    // Month
    const monthContainer = this.createDivElement('form-group');
    const monthElement = document.createElement('select');
    monthElement.className = 'form-control';

    months.forEach((month) => {
      const option = new Option(month, month, false, false);
      monthElement.appendChild(option);
    });

    monthElement.name = 'month';

    monthTag.textContent = 'Month';
    monthContainer.classList = 'col-6';
    monthContainer.appendChild(monthTag);
    monthContainer.appendChild(monthElement);

    return monthContainer;
  }

  static dayContainer() {
    const dayTag = document.createElement('label');
    const dayContainer = this.createDivElement('form-group');
    const dayElement = document.createElement('input');
    dayElement.type = 'tel';
    dayElement.className = 'form-control ';
    dayElement.placeholder = 'DD';
    dayElement.name = 'day';
    dayTag.textContent = 'Day';
    dayContainer.className = 'col-3';
    dayContainer.appendChild(dayTag);
    dayContainer.appendChild(dayElement);

    return dayContainer;
  }

  static yearContainer() {
    const yearTag = document.createElement('label');
    const yearContainer = this.createDivElement('form-group');
    const yearElement = document.createElement('input');
    yearElement.type = 'tel';
    yearElement.className = 'form-control';
    yearElement.placeholder = 'YYYY';
    yearElement.name = 'year';
    yearTag.textContent = 'Year';
    yearContainer.className = 'col-3';

    yearContainer.appendChild(yearTag);
    yearContainer.appendChild(yearElement);

    return yearContainer;
  }
}

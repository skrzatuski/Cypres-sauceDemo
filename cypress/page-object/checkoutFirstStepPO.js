class CheckOutStepOne {
  get firstNameInput() {
    return cy.get("#first-name");
  }
  get lastNameInput() {
    return cy.get("#last-name");
  }
  get zipCodeInput() {
    return cy.get("#postal-code");
  }
  get continueBtn() {
    return cy.get("#continue");
  }
  completeTheForm(name, lastName, zipCode) {
    this.firstNameInput.type(name);
    this.lastNameInput.type(lastName);
    this.zipCodeInput.type(zipCode);
    this.continueBtn.click();
  }
}

export default new CheckOutStepOne();

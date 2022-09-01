class CheckOutStepOne {
  elements = {
    firstNameInput: () => cy.get("#first-name"),
    lastNameInput: () => cy.get("#last-name"),
    zipCodeInput: () => cy.get("#postal-code"),
    continueBtn: () => cy.get("#continue"),
  };

  completeTheForm(name, lastName, zipCode) {
    this.elements.firstNameInput().type(name);
    this.elements.lastNameInput().type(lastName);
    this.elements.zipCodeInput().type(zipCode);
    this.elements.continueBtn().click();
  }
}

export default new CheckOutStepOne();

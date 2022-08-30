class CheckOutStepTwo {
  get finishBtn() {
    return cy.get("#finish");
  }
  confirmOrder() {
    this.finishBtn.click();
  }
}

export default new CheckOutStepTwo();

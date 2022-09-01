class CheckOutStepTwo {
  elements = {
    finishBtn: () => cy.get("#finish"),
  };

  confirmOrder() {
    this.elements.finishBtn().click();
  }
}

export default new CheckOutStepTwo();

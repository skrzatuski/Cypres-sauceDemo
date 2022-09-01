class CheckOutComplete {
  elements = {
    goBackBtn: () => cy.get("#back-to-products"),
  };
  goBackToProducts() {
    this.elements.goBackBtn().click();
  }
  confirmText() {
    cy.get("#checkout_complete_container")
      .find("h2")
      .invoke("text")
      .then((tekst) => {
        expect(tekst).to.equal("THANK YOU FOR YOUR ORDER");
      });
  }
}

export default new CheckOutComplete();

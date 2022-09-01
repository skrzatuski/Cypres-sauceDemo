class Cart {
  elements = {
    checkoutBtn: () => cy.get("#checkout"),
  };

  checkout() {
    this.elements.checkoutBtn().click();
  }
}
export default new Cart();

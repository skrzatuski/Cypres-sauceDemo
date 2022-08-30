class Cart {
  get checkoutBtn() {
    return cy.get("#checkout");
  }
  checkout() {
    this.checkoutBtn.click();
  }
}
export default new Cart();

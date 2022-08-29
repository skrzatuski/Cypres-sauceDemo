class InventoryPage {
  get itemSelector() {
    return cy.get("div.inventory_item");
  }
  get itemAddBtn() {
    return cy.get("button.btn_primary");
  }
  checkItemAmount(value) {
    this.itemSelector.should("have.length", value);
  }
  checkItemBtnAmount(value) {
    this.itemAddBtn.should("have.length", value);
  }
}

export default new InventoryPage();

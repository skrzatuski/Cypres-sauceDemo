class InventoryPage {
  get itemSelector() {
    return cy.get("div.inventory_item");
  }
  get itemAddBtn() {
    return cy.get("button.btn_primary");
  }
  get selectContainer() {
    return cy.get("select.product_sort_container");
  }
  checkItemAmount(value) {
    this.itemSelector.should("have.length", value);
  }
  checkItemBtnAmount(value) {
    this.itemAddBtn.should("have.length", value);
  }
  chooseAllOptions() {
    this.selectContainer.find("option").each((option) => {
      this.selectContainer.select(option.text());
    });
  }
}

export default new InventoryPage();

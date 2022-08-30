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
  get backpackBtn() {
    return cy.get("#add-to-cart-sauce-labs-backpack");
  }
  get bikeLightBtn() {
    return cy.get("#add-to-cart-sauce-labs-bike-light");
  }
  get tShirtBtn() {
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  get fleeceJacketBtn() {
    return cy.get("#add-to-cart-sauce-labs-fleece-jacket");
  }
  get cartBtn() {
    return cy.get("a.shopping_cart_link");
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
  addItemToCart(item) {
    item.click();
  }
  goToCard() {
    this.cartBtn.click();
  }
  fullBuy() {
    this.addItemToCart(this.backpackBtn);
    this.addItemToCart(this.bikeLightBtn);
    this.goToCard();
    
  }
}

export default new InventoryPage();

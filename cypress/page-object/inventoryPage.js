class InventoryPage {
  elements = {
    websiteStepOneUrl: () => "https://www.saucedemo.com/checkout-step-one.html",
    itemSelector: () => cy.get("div.inventory_item"),
    itemAddBtn: () => cy.get("button.btn_primary"),
    selectContainer: () => cy.get("select.product_sort_container"),
    backpackBtn: () => cy.get("#add-to-cart-sauce-labs-backpack"),
    bikeLightBtn: () => cy.get("#add-to-cart-sauce-labs-bike-light"),
    tShirtBtn: () => cy.get("#add-to-cart-sauce-labs-bolt-t-shirt"),
    fleeceJacketBtn: () => cy.get("#add-to-cart-sauce-labs-fleece-jacket"),
    cartBtn: () => cy.get("a.shopping_cart_link"),
    menuBtn: () => cy.get("#react-burger-menu-btn"),
    menuExitBtn: () => cy.get("#react-burger-cross-btn"),
  };

  isMenuVisible() {
    this.elements.menuBtn().click();
    cy.get("nav.bm-item-list").should("be.visible");
    this.elements.menuExitBtn().should("exist");
  }

  checkItemAmount(value) {
    this.elements.itemSelector().should("have.length", value);
  }

  checkItemBtnAmount(value) {
    this.elements.itemAddBtn().should("have.length", value);
  }

  chooseAllOptions() {
    this.elements
      .selectContainer()
      .find("option")
      .each((option) => {
        this.elements.selectContainer().select(option.text());
      });
  }

  addItemToCart(item) {
    item.click();
  }

  goToCard() {
    this.elements.cartBtn().click();
  }

  fullBuy() {
    this.addItemToCart(this.elements.backpackBtn());
    this.addItemToCart(this.elements.bikeLightBtn());
    this.goToCard();
  }
}

export default new InventoryPage();

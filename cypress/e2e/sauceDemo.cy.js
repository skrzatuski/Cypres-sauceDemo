/// <reference types="cypress" />

import cartPO from "../page-object/cartPO";
import checkOutCompletePO from "../page-object/checkOutCompletePO";
import checkoutFirstStepPO from "../page-object/checkoutFirstStepPO";
import checkOutStepTwoPO from "../page-object/checkOutStepTwoPO";
import inventoryPagePO from "../page-object/inventoryPagePO";
import loginPagePO from "../page-object/loginPagePO";

describe("SauceDemo page test", () => {
  it("Fail Login test", () => {
    loginPagePO.failLogin();
  });
  it("Sign in", () => {
    loginPagePO.signIn("standard_user", "secret_sauce");
  });
  it("Check correct item amount on website", () => {
    inventoryPagePO.checkItemAmount(6);
  });
  it("Check correct btn amount on website", () => {
    inventoryPagePO.checkItemBtnAmount(6);
  });
  it("Select all sorting options", () => {
    inventoryPagePO.chooseAllOptions();
  });
  it("Add item to card", () => {
    inventoryPagePO.addItemToCart(inventoryPagePO.backpackBtn);
    inventoryPagePO.addItemToCart(inventoryPagePO.bikeLightBtn);
    inventoryPagePO.addItemToCart(inventoryPagePO.fleeceJacketBtn);
  });
  it("Fully item buy test", () => {
    loginPagePO.signIn("standard_user", "secret_sauce");
    inventoryPagePO.addItemToCart(inventoryPagePO.fleeceJacketBtn);
    inventoryPagePO.goToCard();
    cartPO.checkout();
    cy.url().should(
      "equal",
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    checkoutFirstStepPO.completeTheForm("Mariano", "Italiano", "94-052");
    checkOutStepTwoPO.confirmOrder();
    checkOutCompletePO.confirmText();
  });
  it("Go back to products after complete order", () => {
    checkOutCompletePO.goBackToProducts();
    
  });
});

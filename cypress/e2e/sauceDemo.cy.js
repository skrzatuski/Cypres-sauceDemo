/// <reference types="cypress" />

import cartPO from "../page-object/cart";
import checkoutComplete from "../page-object/checkOutComplete";
import checkoutFirstPage from "../page-object/checkoutFirstStep";
import checkoutStepTwo from "../page-object/checkOutStepTwo";
import inventoryPage from "../page-object/inventoryPage";
import loginPage from "../page-object/loginPage";

describe("SauceDemo page test", () => {
  it("Fail Login test", () => {
    loginPage.failLogin();
  });
  it("Sign in", () => {
    loginPage.signIn("standard_user", "secret_sauce");
  });
  it("Check correct item amount on website", () => {
    inventoryPage.checkItemAmount(6);
  });
  it("Check correct btn amount on website", () => {
    inventoryPage.checkItemBtnAmount(6);
  });
  it("Select all sorting options", () => {
    inventoryPage.chooseAllOptions();
  });
  it("Add item to card", () => {
    inventoryPage.addItemToCart(inventoryPage.elements.backpackBtn());
    inventoryPage.addItemToCart(inventoryPage.elements.bikeLightBtn());
    inventoryPage.addItemToCart(inventoryPage.elements.fleeceJacketBtn());
  });
  it("Fully item buy test", () => {
    loginPage.signIn("standard_user", "secret_sauce");
    inventoryPage.addItemToCart(inventoryPage.elements.fleeceJacketBtn());
    inventoryPage.goToCard();
    cartPO.checkout();
    cy.url().should("equal", inventoryPage.elements.websiteStepOneUrl());
    checkoutFirstPage.completeTheForm("Mariano", "Italiano", "94-052");
    checkoutStepTwo.confirmOrder();
    checkoutComplete.confirmText();
  });
  it("Go back to products after complete order", () => {
    checkoutComplete.goBackToProducts();
  });
  it("Check menu visibility in inventory", () => {
    loginPage.signIn("standard_user", "secret_sauce");
    inventoryPage.isMenuVisible();
  });
});

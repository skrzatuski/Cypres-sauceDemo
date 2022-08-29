/// <reference types="cypress" />

import inventoryPagePO from "../page-object/inventoryPagePO";
import loginPagePO from "../page-object/loginPagePO";

describe("SauceDemo page test", () => {
  it("Fail Login test", () => {
    cy.visit("https://www.saucedemo.com");
    loginPagePO.failLogin();
  });
  it("Sign in", () => {
    cy.visit("https://www.saucedemo.com");
    loginPagePO.signIn("standard_user", "secret_sauce");
  });
  it("Check correct item amount on website", () => {
    inventoryPagePO.checkItemAmount(6);
  });
  it("Check correct btn amount on website", () => {
    inventoryPagePO.checkItemBtnAmount(6);
  });
});

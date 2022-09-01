class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMsg: () => cy.get("#login_button_container").find("h3").invoke("text"),
  };

  visit() {
    cy.visit("/");
  }
  clearInputs() {
    this.elements.usernameInput().clear();
    this.elements.passwordInput().clear();
  }
  signIn(email, password) {
    this.visit();
    this.clearInputs();
    this.elements.usernameInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
  failLogin() {
    this.signIn("asdas@gmail.com", "asdasd");
    this.elements
      .errorMsg()
      .should(
        "equal",
        "Epic sadface: Username and password do not match any user in this service"
      );
  }
}

export default new LoginPage();

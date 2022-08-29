class LoginPage {
  get usernameInput() {
    return cy.get("#user-name");
  }
  get passwordInput() {
    return cy.get("#password");
  }
  get loginBtn() {
    return cy.get("#login-button");
  }
  get errorMsg() {
    return cy.get("#login_button_container").find("h3").invoke("text");
  }
  clearInputs() {
    this.usernameInput.clear();
    this.passwordInput.clear();
  }
  signIn(email, password) {
    this.clearInputs();
    this.usernameInput.type(email);
    this.passwordInput.type(password);
    this.loginBtn.click();
  }
  failLogin() {
    this.signIn("asdas@gmail.com", "asdasd");
    this.errorMsg.should(
      "equal",
      "Epic sadface: Username and password do not match any user in this service"
    );
  }
}

export default new LoginPage();

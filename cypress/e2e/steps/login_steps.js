/// <reference types="Cypress" />

import LoginPage from "../pages/login_page";
const loginPage = new LoginPage

Given(/^eu acesse a página home da aplicação$/, () => {
	loginPage.acessHomePage()
});

When(/^eu inserir meu email "([^"]*)" e minha senha "([^"]*)"$/, (email,password) => {
	console.log(email,password);
	loginPage.acessLoginPage()
    loginPage.fillLoginInfo(email , password)
});

When(/^clicar no botão entrar$/, () => {
	loginPage.submitLogin()
});

Then(/^tenho o acesso "([^"]*)"$/, (mensagem) => {
	if (mensagem === "com sucesso na aplicação") {
    cy.contains('Dashboard'); // Verifica que foi redirecionado para a tela de Dashboard
  } else if (mensagem === "sem sucesso na aplicação") {
    cy.contains('h4', 'Invalid Login', { timeout: 5000 })
      .should('be.visible')
      .and('contain.text', 'Invalid Login');
  } else {
    cy.log("Mensagem inesperada: " + mensagem);
  }
});
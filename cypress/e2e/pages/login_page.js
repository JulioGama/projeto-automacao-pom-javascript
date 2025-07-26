/// <reference types="Cypress" />
import HomeElements from "../elements/home_elements"
import LoginElements from "../elements/login_elements"

const homeElements = new HomeElements
const loginElements = new LoginElements

const url = Cypress.config('baseUrl')

class LoginPage {

    acessHomePage(){
        cy.visit(url)
        cy.wait(1000)
        cy.get(homeElements.btnHideCookie()).click()
    }

    acessLoginPage(){
        cy.contains(homeElements.selectCustomer()).click()
        cy.get(homeElements.btnLogin()).click()
    }

    fillLoginInfo(email, password){
        cy.get(loginElements.inputEmail()).type(email)
        cy.get(loginElements.inputPassword()).type(password)
    }

    submitLogin(){
        cy.get(loginElements.submitLogin()).click()
    }

    verifyLoginError() {
        cy.contains().should('be.visible');
    }

} export default LoginPage
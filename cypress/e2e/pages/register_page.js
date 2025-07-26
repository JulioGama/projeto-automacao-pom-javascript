/// <reference types="Cypress" />
import RegisterElements from "../elements/register_elements"

const registerElements = new RegisterElements
const url = 'https://demo.automationtesting.in/Register.html'

class RegisterPage {

    visitPage(){
        cy.visit(url)
    }

    fillNameAndLastName(name, lastName){
        cy.get(registerElements.inputFirstName()).type(name)
        cy.get(registerElements.inputLastName()).type(lastName)
    }

    fillContacts(address, email, phone){
        cy.get(registerElements.inputAddress()).type(address)
        cy.get(registerElements.inputAddresEmail()).type(email)
        cy.get(registerElements.inputPhoneNumber()).type(phone)
    }

    selectRadioGender(gender){
        cy.get(registerElements.checkRadioGender()).check(gender)
    }

    selectRadioHobbies(hobbies){
        cy.get(registerElements.checkHobbies()).check(hobbies)
    }

    selectLanguages(language){

    }

    selectSkills(skill){
        cy.get(registerElements.selectSkills()).select(skill)
    }

    selectCountry(country){
        cy.get(registerElements.selectCountry()).click();
        cy.get('.select2-results__option').contains(country).click();
    }

    selectBirthDay(year, month, day){
        cy.get(registerElements.selectYear()).select(year)
        cy.get(registerElements.selectMonth()).select(month)
        cy.get(registerElements.selectDay()).select(day)
    }

    inputPasswords(password, confirmPasswod){
        cy.get(registerElements.inputPassword()).type(password)
        cy.get(registerElements.inputConfirmPassword()).type(confirmPasswod)
    }

    btnSubmit(){
        cy.get(registerElements.submitBtn()).click()
    }

    selectImage(){
        cy.get(registerElements.selectFile()).selectFile('cypress/archives/image.png')
    }

} export default RegisterPage
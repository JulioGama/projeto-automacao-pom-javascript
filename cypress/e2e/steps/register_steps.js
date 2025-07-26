/// <reference types="Cypress" />
import RegisterPage from "../pages/register_page";


const registerPage = new RegisterPage


Given(/^que estejamos na page de Cadastro$/, () => {
	registerPage.visitPage()
});

When(/^inserimos nosso Nome "([^"]*)" e sobrenome "([^"]*)"$/, (name,lastName) => {
	registerPage.fillNameAndLastName(name,lastName)	
});

When(/^informarmos nossos dados de contato "([^"]*)", "([^"]*)" e "([^"]*)"$/, (addres,email,phone) => {
	registerPage.fillContacts(addres, email, phone)
});

When(/^nosso genero como "([^"]*)" e hobbies "([^"]*)"$/, (gender,hobbies) => {
    registerPage.selectRadioGender(gender)
    registerPage.selectRadioHobbies(hobbies)
});

When(/^nossa skill "([^"]*)" e nosso país "([^"]*)"$/, (skill,country) => {
	registerPage.selectSkills(skill)
    registerPage.selectCountry(country)
});

When(/^eu selecionar meu nascimento "([^"]*)", "([^"]*)" e "([^"]*)"$/, (year,month,day) => {
	registerPage.selectBirthDay(year, month, day)
});

When(/^inserir minhas senhas "([^"]*)" e "([^"]*)"$/, (password,confirmPasswod) => {
	registerPage.inputPasswords(password, confirmPasswod)
    registerPage.selectImage()
});

When(/^clico no botão cadastrar$/, () => {
	registerPage.btnSubmit()
});

Then(/^tenho meu cadastro realizado com sucesso.$/, () => {
	
});

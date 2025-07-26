Feature: Login
Funcionalidade para realizar variados Logins no Sistema PHPTravels

  Scenario Outline: "<cenario>"
    Given eu acesse a página home da aplicação
    When eu inserir meu email "<email>" e minha senha "<senha>"
    And clicar no botão entrar
    Then tenho o acesso "<mensagem>"

    Examples:
      | cenario           | email               | senha    | mensagem                 |
      | Login com sucesso | user@phptravels.com | demouser | com sucesso na aplicação |
      | Login inválido    | email@teste.com     | teste    | sem sucesso na aplicação |

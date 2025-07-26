Feature: Cadastro de Usuário
Cadastro de usuários na plataforma

  Scenario Outline: "<caso_teste>"
    Given que estejamos na page de Cadastro
    And inserimos nosso Nome "<name>" e sobrenome "<lastName>"
    And informarmos nossos dados de contato "<address>", "<email>" e "<phone>"
    And nosso genero como "<gender>" e hobbies "<hobbies>"
    And nossa skill "<skill>" e nosso país "<country>"
    When eu selecionar meu nascimento "<year>", "<month>" e "<day>"
    And inserir minhas senhas "<password>" e "<confirmPassword>"
    And clico no botão cadastrar
    Then tenho meu cadastro realizado com sucesso.

    Examples:
      | caso_teste            | name   | lastName | address   | email           | phone       | gender | hobbies | skill | country   | year | month   | day | password | confirmPassword |
      | Cadastro com sucesso | Danilo | Silva    | Rua teste | teste@teste.com | 16999999999 | Male   | Movies  | SQL   | Australia | 1990 | January |  1 |  123@123 |         123@123 |

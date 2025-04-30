Feature: Cadastro de Usuário

  Scenario Outline: Validação de cadastro com diferentes combinações de dados
    Given que estou na página de cadastro
    When preencho os campos com os dados:
      | FirstName | LastName | cep       | email     | telefone       |
      | <FirstName> | <LastName> | <cep> | <email> | <telefone>     |
    Then envio o formulário


    Examples:
      | cenario                | FirstName | LastName | cep       | email     | telefone       | 
      | Cadastro com Sucesso   | Rafael    | Suzano   | 11035001 | r@f.com   | (111) 111-1111 | 
      | Cadastro Sem Email     | Rafael    | Suzano   | 11035001 |           | (111) 111-1111 | 
      | Cadastro Sem cep       | Rafael    | Suzano   |           | r@f.com   | (111) 111-1111 | 
      | Cadastro Sem Telefone  | Rafael    | Suzano   | 11035001 | r@f.com   |                | 



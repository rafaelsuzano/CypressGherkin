Feature: Preencher formulário JotForm

  Scenario: Preencher e enviar formulário com sucesso
    Given eu acesso o formulário
    When eu preencho todos os campos obrigatórios
    And eu envio o formulário
    Then eu devo ver uma mensagem de sucesso

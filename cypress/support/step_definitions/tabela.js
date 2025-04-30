import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let  a
Given("que estou na página de cadastro", () => {
  cy.visit('/231692676005660');
});

When("preencho os campos com os dados:", (dataTable) => {
  const data = dataTable.hashes()[0];

  if (data.FirstName)
    cy.get('input[id="first_20"]').clear().type(data.FirstName);

  if (data.LastName)
    cy.get('input[id="last_20"]').clear().type(data.LastName);

  if (data.email !== undefined)a
    cy.get('input[id="input_23"]').clear().type(data.email);

  if (data.email && data.email.trim() !== "") {
    cy.get('input[id="input_23"]').clear().type(data.email);
  }

  if (data.telefone !== undefined)
    cy.get('input[id="input_19_full"]').clear().type(data.telefone);

  if (data.email && data.email.trim() !== "") {
    cy.get('input[id="input_23"]').clear().type(data.email);
  }

  if (data.cep !== undefined)
    cy.get('input[id="input_21_postal"]').clear().type(data.cep);



  if (data.email && data.email.trim() !== "") {
    cy.get('input[id="input_23"]').clear().type(data.email);
  }

  // Campos adicionais fictícios obrigatórios do endereço (ajuste se necessário)
  cy.get('input[id="input_21_addr_line1"]').clear().type('a');
  cy.get('input[id="input_21_addr_line2"]').clear().type('a');
  cy.get('input[id="input_21_city"]').clear().type('a');
  cy.get('input[id="input_21_state"]').clear().type('a');
});

Then("envio o formulário", () => {
  cy.get('#input_2').click()
});


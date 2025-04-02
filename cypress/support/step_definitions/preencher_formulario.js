import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('eu acesso o formulário', () => {
  cy.visit('/231692676005660');
});

When('eu preencho todos os campos obrigatórios', () => {
  cy.get('input[id="first_20"]').type('rafael');
  cy.get('input[id="last_20"]').type('Suzano')
  cy.get('input[id="input_23"]').type('rafael@suzano.com');

  cy.get('input[id="input_19_full"]').type('(111) 111-1111');
  cy.get('input[id="input_21_addr_line1"]').type('a')
  cy.get('input[id="input_21_addr_line2"]').type('a')
  cy.get('input[id="input_21_city"]').type('a')
  cy.get('input[id="input_21_state"]').type('a')
  cy.get('input[id="input_21_postal"]').type('11035001')



});

When('eu envio o formulário', () => {
  cy.get('#input_2').click()
});

Then('eu devo ver uma mensagem de sucesso', () => {
  cy.contains('/html/body/div[1]/div/div/h1').should('be.visible');

});

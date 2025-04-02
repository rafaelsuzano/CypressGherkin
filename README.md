# 🧪 Cypress + Cucumber (Gherkin) | Formulário JotForm

Este projeto automatiza testes end-to-end em um formulário online utilizando **Cypress** integrado com **Cucumber (Gherkin)**.  
Os testes validam o preenchimento e envio correto do formulário hospedado em:  
[https://form.jotform.com/231692676005660](https://form.jotform.com/231692676005660)

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Gherkin](https://cucumber.io/docs/gherkin/)
- [esbuild](https://esbuild.github.io/)

---

## 📁 Estrutura de Pastas

```bash
CypressGherkin/
├── cypress/
│   ├── e2e/
│   │   └── formulario/
│   │       └── preencher_formulario.feature  # Testes em Gherkin
│   ├── support/
│   │   ├── e2e.js                             # Setup do Cucumber
│   │   └── step_definitions/
│   │       └── preencher_formulario.js        # Definições dos passos (Given, When, Then)
├── cypress.config.js                          # Configuração do Cypress + Cucumber
├── package.json                               # Dependências e scripts

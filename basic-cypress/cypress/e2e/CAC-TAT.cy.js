/// <reference types="Cypress" />
beforeEach()
describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('./cypress-basico-v2/src/index.html')
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })

    describe('preenche os campos obrigatórios e envia o formulário', function() {
        


  })
})
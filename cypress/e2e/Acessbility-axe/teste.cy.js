
it('passes axe', () => {
    cy.visit('https://www.itau.com.br/')
    cy.injectAxe()
    cy.checkA11y() // checks the whole document
  })
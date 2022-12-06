export function visit() {
    //cy.viewport(1000,660)
    //Visit Amazon's website 
    cy.visit('https://www.amazon.fr')
    cy.get('#sp-cc-rejectall-link').click()
  }
  
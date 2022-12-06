export function colorCheck(color){
    //Check the color 
  //cy.contains(color).should('be.visible')
  cy.get('.selection').should('have.text',color)
  }
  
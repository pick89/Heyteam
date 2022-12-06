export function searchAndSelectItem(itemSearch,itemSelect) {
    //Search an item
    cy.get('#twotabsearchtextbox').type(itemSearch +'{enter}')
    //Select an item
    cy.contains(itemSelect).click().should('be.visible')
    cy.contains(itemSelect).click().should('be.visible')
    cy.wait(500)
    }
export function personalizeItem(tagItem) {
    // personailize item
 cy.get("#gestalt-popover-button-announce").click()
 cy.get('.a-input-text').type(tagItem)
 
 }
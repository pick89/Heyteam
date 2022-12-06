export function addCart(nbItem,priceItem) {
    //Add to cart
    cy.get('#gc-add-to-cart').click()
    cy.wait(700)
    // check adding items to the cart 
    cy.contains('Ajouté au panier').should('be.visible')
   
    //Second check adding items to the cart into the cart itself
    cy.get('#nav-cart-count').click()
    cy.contains("Votre panier").should('be.visible')
   
    //Check number of items
    cy.contains(nbItem +' article').should('be.visible')
    cy.contains(priceItem+ ' €').should('be.visible')
   
    }
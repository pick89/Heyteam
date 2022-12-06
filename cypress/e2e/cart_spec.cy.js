describe('Adding a element to cart', function () {
    it('Add the item to the cart before login', () => {
      
      cy.viewport(1920,1080)
      //Visit Amazon's website 
      cy.visit('https://www.amazon.fr')
      cy.get('#sp-cc-rejectall-link').click()
  
      
      //Look for the items
      cy.get('#twotabsearchtextbox').type("bracelet personalisable {enter}")
    
      //Select an items
      cy.contains("Bijoux personnalisés prénom femme").click().should('be.visible')
      cy.wait(500)
  
      
      //Check the color 
      cy.contains('Argent')
      cy.get('.selection').should('have.text','Argent')
  
      // personailize it
      cy.get("#gestalt-popover-button-announce").click()
      cy.get('.a-input-text').type("Cypress")
  
      //Add to cart
      cy.get('#gc-add-to-cart').click()
      cy.wait(700)
      // check adding items to the cart 
      cy.contains('Ajouté au panier').should('be.visible')
  
      //Second check adding items to the cart into the cart itself
      cy.get('#nav-cart-count').click()
      cy.contains("Votre panier").should('be.visible')
      
      //Check number of items
      cy.contains('1 article').should('be.visible')
      //Check the price
      cy.contains('13,90 €').should('be.visible')
  
      //Go to checkOut
      cy.get('[data-feature-id="proceed-to-checkout-action"]').click()
  
      //login
      cy.fixture('credential.json').then((loc) =>{
        cy.get('#ap_email').type(loc.email)
        cy.get('#continue').click()
        cy.get('#ap_password').type(loc.password)
        cy.get('#signInSubmit').click()
      })
      
    })
  })
export function login(dataFixture) {
    //login
    cy.fixture(dataFixture).then((loc) => {
        cy.get('#ap_email').type(loc.email)
        cy.get('#continue').click()
        cy.get('#ap_password').type(loc.password)
        cy.get('#signInSubmit').click()
    })
}
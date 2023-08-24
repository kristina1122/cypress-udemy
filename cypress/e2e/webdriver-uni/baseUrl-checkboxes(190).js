describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function() {
        cy.visit("/")  // "/" url берется из конфиг настроек baseurl
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })
    it("Check and validate chckboxes", () => {

    // cy.get('#checkboxes > :nth-child(1) > input').check()
    // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    cy.get('@option-1').check();
    cy.get('@option-1').check().should('be.checked')

    });
})

describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate chckboxes", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    // cy.get('#checkboxes > :nth-child(1) > input').check()
    // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    cy.get('@option-1').check();
    cy.get('@option-1').check().should('be.checked')

    });

it("Check and validate chckboxes", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')
        
 });

 it("Check multiple chckboxes", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked")

    });
})
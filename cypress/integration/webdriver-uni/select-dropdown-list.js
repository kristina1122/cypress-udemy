describe("Interact with dropdown lists via wedriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    cy.get('#dropdowm-menu-1').select('c#')
    cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
    cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery')

        });


    it("Challenge select + verify + select another option and verify again", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
    cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
        
    });
})
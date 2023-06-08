/// <reference types="cypress"/>


describe("Alias and Invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        //we used eq to select first product in Index page and invoke text (name) and used alias 
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        //validate the length 
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
        //validate the name 
    
    });

    it("Challenge Alias and Invoke", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").invoke('text').as('productThumbnail')
    })
})

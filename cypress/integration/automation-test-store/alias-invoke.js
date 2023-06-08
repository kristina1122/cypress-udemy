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
// 
    // it("Challenge Alias and Invoke", () => {
        // cy.visit("https://automationteststore.com/");
        // cy.get(".thumbnail").invoke('val').as('amount')
        // cy.get('@amount').its('length').should('be.an', 16)
// 
        // Validate title for UI icon
        // cy.get('.productcart').invoke('text').as('icon')
        // cy.get('@icon').should('include', 'Add to Cart')
    // });
// 
    //Answer
    it("Challenge Alias and Invoke", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        //Validate title for UI icon
        // cy.get('.productcart').invoke('text').as('icon')
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
        // cy.get('@icon').should('include', 'Add to Cart')
    });
})

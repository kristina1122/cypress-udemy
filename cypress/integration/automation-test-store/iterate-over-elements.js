/// <reference types="cypress"/>


describe("Iterate over elements", () => {
    beforeEach(function() {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    })
    it("Log information of all hair care products", () => {
//with this command we get all names of products from list. They are shown in logs
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index : " + index + " : " + $el.text() )

        })
    });

    it("Add specific product to basket", () => {

        //we want to check that our desired item is among the other items and we want to click on it.
      
        // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //  if($el.text().includes ('Curls to straight Shampoo')) {
        //     cy.wrap($el).click()
        //  }
        // });

    cy.selectProduct('Curls to straight Shampoo');    // это команда, которую мы создали в суппорт - команды. selectProduct - это название команды при создании

    });

    it("Add another specific product to basket via Custommer command", () => {

    cy.selectProduct('Seaweed Conditioner');

    });

    it("Challenge -> Add another specific product to basket via Custommer command", () => {
    
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    
        });
})
/// <reference types="cypress"/>


describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
//with this command we get all names of products from list. They are shown in logs
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index : " + index + " : " + $el.text() )

        })
    });

    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        //we want to check that our desired item is among the other items and we want to click on it.
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
         if($el.text().includes ('Curls to straight Shampoo')) {
            cy.wrap($el).click()
         }
        });

    });
})
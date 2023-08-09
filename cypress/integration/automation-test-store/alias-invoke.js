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

    it("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //    this query show only products with full price, without any discount
        //    cy.log($el.text());

        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0; 
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsPriceTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsPriceTotal)
        });
        // cy.get('@saleItemPrice').then($linkText => {
            // var saleItemPrice = 0;
            // var saleItemPrice = $linkText.split('$');
            // var i;
            // for(i = 0; i < saleItemPrice.length; i++) {
                // cy.log(saleItemPrice[i])
                // saleItemPrice += Number(saleItemPrice[i]) 
            // }
            // cy.log("Sale price items total: " + saleItemPrice)
        //  })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale price items total: " + saleItemsPrice)
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.equal(403)
        })
    

    });
});

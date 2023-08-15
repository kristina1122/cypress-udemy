describe("Validate homepage links", () => {
        it("Confirm links redirect to the correct pages", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')
       cy.go('back');
       cy.url().should('include', 'http://www.webdriveruniversity.com/');
       cy.reload();
       // cy.reload(true)   // reload without using cache
       cy.go('forward');
       cy.url().should('include', 'contactus');

        cy.go('back');
       cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true});
       cy.url().should('include', 'Login-Portal');
         cy.go('back');
     });
})

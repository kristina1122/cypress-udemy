describe('Cypress web security', () => {
    //here test for different URLs will fail because incorrect request there
    it.skip('validate visiting two dofferent domaind', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://google.com')
        
    });
    
    //1 option for test with  different urls
    it('validate visiting two dofferent domaind via user actions', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });


    //2 option for test with  different urls
    it('origin command', () => {
    //     cy.origin('webdriveruniversity.com', () => {
    //         cy.visit("/");
    //     });

    //     cy.origin('automationteststore.com', () => {
    //         cy.visit("/");
    //     })
        //option 3 - will works because for Urls is used the same superdomain
    cy.visit('http://www.webdriveruniversity.com/')
    cy.visit('https://www.selectors.webdriveruniversity.com/')
    });

});
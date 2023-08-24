describe("challenge browser navigation", () => {
    it("need to go to To da list, validate and back to home page", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'To-Do-List');
        cy.go('back');
        cy.url().should('include', 'http://www.webdriveruniversity.com/');
    })

})
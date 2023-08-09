describe("Multiple for browser, if some page is opens in new tab", () => {
    it("Cypress should continue to work in new tab", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        cy.get('.section_header').should('have.text', 'CONTACT US');
        cy.get('[name="first_name"]').type('Kristina');
        cy.get('[name="first_name"]').should('have.value', 'Kristina');
        cy.get('[name="last_name"]').type('Romaniuk');
        cy.get('[name="email"]').type('hhde@sds.fs');
        cy.get('textarea.feedback-input').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
        cy.get('#form_buttons').should('not.contain', 'click me')
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
     }),

     it("Cypress should able to do the same action second time", () => {
        cy.visit("http://www.webdriveruniversity.com");
        //we need to remove attribute "target="_blank"" because it responsible for open new tab 
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        cy.get('[name="first_name"]').type('Kris');
        cy.get('[name="last_name"]').type('Iohf');
        cy.get('textarea.feedback-input').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');

     })
    })
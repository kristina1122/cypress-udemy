/// <reference types="Cypress"/>


describe("The test Contact us form via webdriveruniversity.com", () => {
    it("Should be able to a succesfull vsubmission via Contact us form ", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
       // cy.get('#contact-us').click({force: true}) 
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

     it("Should not be able to a succesfull vsubmission via Contact us form as all fields are required", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Kris')
        cy.get('[name="last_name"]').type('Iohf')
        cy.get('textarea.feedback-input').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
   })
}) 

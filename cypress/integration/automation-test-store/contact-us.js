/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


describe("The test Contact us form via Automation test Store", () => {
    it("Should be able to a succesfull vsubmission via Contact us form ", () => {
        cy.visit("https://automationteststore.com/");
       // cy.get('.info_links_footer > :nth-child(5) > a').click();
       cy.xpath("//a[contains (@href, 'contact' )]").click().then(function(linkText){
        cy.log("Clicked on link using text: " + linkText.text());
       })
        cy.get('#ContactUsFrm_first_name').type('Kristina');
        cy.get('#ContactUsFrm_email').type('hhd@efe.fefe');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('test test');
       // cy.get('.col-md-6 > .btn').click();
       cy.get('button[title="Submit"]').click();
       cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');

    })

}) 

/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


describe("Inspect AutomationTest Store  items using chain of commands", () => {
    it("click on the First Item using item header ", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();


    }),

    it.only("click on the second Item using item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('BeneFit Girl Meets Pearl').click().then(function(itemHeaderText) {
            console.log ("Selected the following item: " + itemHeaderText.text)
        })
    }),

    it("click on the third Item using index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(2).click();
    })



}) 
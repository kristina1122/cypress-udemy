/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert the total age of all users", () => {
        // lesson 157
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            // use this locator to find Fname, Lname and age
            userDetails[index] = $el.text(); //stolen text in the index via: var userDetails = [];
        }).then (() => {
            var i;
            for(i = 1; i< userDetails.length; i++) {
                if(Number(userDetails[i])) {       //verify whrere the state is a number
                     numb += Number(userDetails[i])   //extract this specific number
                }
               
                //cy.log(userDetails[i])
            }
            cy.log("Found the total age:" + numb)
            expect(numb).to.eq(322)
        })
    }); 

    it.only("Calculate and assert the age of a given user based on last name", () => {
        //1. need to create selector for last names -- need to review all 159 + 160 lesson
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes("Woods")) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text();
                    expect(userAge).to.equal("80");
                })
            }
        })

    })
  });
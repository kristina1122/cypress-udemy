/// <reference types="cypress" />

describe("Network Request", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/network-requests");
    })

    it("Get Request", () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/1", },
            {
                body: {
                    postId: 1,
                    id: 1,
                    name: "Kristina",
                    email: "test@test.123",
                    body: "Hello, world"
                }
            }).as("getComment");

    cy.get(".network-btn").click();
    cy.wait("@getComment").its("response.statusCode").should("eq", 200)
    });

    it.only("Post Request",() => {
        cy.intercept("POST", "/comments").as("postComment");

        cy.get(".network-post").click();
        cy.wait("@postComment").should(({request, response}) =>{ //проверят и отображает ответ из респонса
            console.log(request);

            expect(request.body).to.include("email");
            console.log(response);
            expect(response.body).to.have.property("name", "Using POST in cy.intercept()");
            expect(request.headers).to.have.property("content-type");
            expect(request.headers).to.have.property("Origin", "https://example.cypress.io");
        })

    })
})
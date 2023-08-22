/// <reference types="cypress" />

describe("Network Request", () => {
    let message = "Unable to find comment!"
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

    it("Post Request",() => {
        cy.intercept("POST", "/comments").as("postComment");

        cy.get(".network-post").click();
        cy.wait("@postComment").should(({request, response}) =>{ //проверят и отображает ответ из респонса
            console.log(request);

            expect(request.body).to.include("email");
            console.log(response);
            expect(response.body).to.have.property("name", "Using POST in cy.intercept()");
            expect(request.headers).to.have.property("content-type");
            expect(request.headers).to.have.property("referer", "https://example.cypress.io/");
        })

    });

    it.only("Put Request", () => {
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        },
        {
            statusCode: 404,
            body: {error: message},
            delay: 500
        }).as("putComment");

        cy.get(".network-put").click();

        cy.wait("@putComment");
        cy.get(".network-put-comment").should("contain", message)
    })
})
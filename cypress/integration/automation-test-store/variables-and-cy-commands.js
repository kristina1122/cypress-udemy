/// <reference types="cypress"/>


describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    });
})
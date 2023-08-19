/// <reference types="cypress"/>
import Autostore_Homepage_Po from "../../support/pageObjects/automation-test-store/Autostore_Homepage_PO";
import Autostore_HairCare_Po from "../../support/pageObjects/automation-test-store/Autostore_HaitCare_PO";


describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new Autostore_Homepage_Po();
    const autoStore_HairCare_PO = new Autostore_HairCare_Po();

before(function() {          
    cy.clearAllLocalStorage();  
    cy.clearAllCookies();            
    cy.fixture("products").then(function(data) {//здесь добавили список продуктов из fixture
        globalThis.data = data
    })
})
    beforeEach(function() {
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HaieCare_Link();
    })

    it("Add specific items to basket", () => {

        autoStore_HairCare_PO.addHairCareProductsToBasket();

    });
    });
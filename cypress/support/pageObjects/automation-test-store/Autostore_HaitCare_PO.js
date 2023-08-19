class Autostore_HairCare_Po {
addHairCareProductsToBasket() {
    globalThis.data.productName.forEach(function(element){
        cy.addProductToBasket(element).then(() => {
            debugger
        })
    })
    cy.get('.dropdown-toggle > .fa').click();
}
}
    export default Autostore_HairCare_Po;
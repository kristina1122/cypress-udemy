describe("Test mouse action ", () => {
    it("Scroll elements into view", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
//здесь мы добавили скролл через добавление .scrollIntoView()
    });

    it("Should be able to drag and drop graggable item", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        //1. we need to create selector for element wchich will drag and drop
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})

    });

    it("Should be able to double mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#double-click').dblclick();


        });

     it.only("Should be able to hold down the left mouse click btn on a given element ", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

    
        });
})

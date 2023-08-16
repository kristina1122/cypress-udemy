describe("Handle js alerts", () => {
    it("Confirm js alerts contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

    cy.get('#button1').click();
    cy.on('window:alert', (str) => { // alert используем здесь, чтобы сайпрес мог вытянуть текст из окна для проверки
    expect(str).to.equal('I am an alert box!')    
    })

 });

 it("Validate js confirm alerts box works correctly when clicking ok", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

    cy.get('#button4').click();
    cy.on('window:alert', (str) => {
        return true   
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!');

 });

 it("Validate js confirm alerts box works correctly when clicking Cancel", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

    cy.get('#button4').click();
    cy.on('window:confirm', (str) => {   //используем confirm + return true or false чтобы кликнуть нужную кнопку. 
        return false   
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');

 });

 it("Validate js confirm alerts box using a stub", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

    const stub = cy.stub()
    cy.on('window:confirm', stub)

    cy.get('#button4').click().then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(() => {
        return true;
    }).then(()=> {
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    })
   
 });

})
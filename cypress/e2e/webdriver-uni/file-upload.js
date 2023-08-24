
describe('Test File upload', () => {
    it('Upload a file ...', () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myFile').selectFile("cypress/fixtures/laptop.png");
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => { // alert используем здесь, чтобы сайпрес мог вытянуть текст из окна для проверки
            expect(str).to.equal('Your file has now been uploaded!')
        })
        

    });

    it('Upload No file ...', () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => { // alert используем здесь, чтобы сайпрес мог вытянуть текст из окна для проверки
            expect(str).to.equal('You need to select a file to upload!')
        })


    })
})
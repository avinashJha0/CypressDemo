describe('XpathLocatorsUse', () =>{

    it('Check Main menu options', ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()

        cy.xpath("//ul[@class='oxd-main-menu']/li").should('have.length',11)        
    })
})
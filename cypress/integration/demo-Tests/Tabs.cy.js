describe('Handle Tabs', ()=>{

    it.skip('Approach one',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')
    })

    it('Approach two *Domain name should be same*',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new']").then((e)=>{
            let childurl=e.prop('href');

            cy.visit(childurl);
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')
    })
})
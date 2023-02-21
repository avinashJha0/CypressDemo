describe('Handle iframe',()=>{

    it('approach one',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        
        let iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("My name is scooby {ctrl+a}");

        cy.get("[title='Bold']").click()
    })

    it('approach two by using commands',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.getiframe('#mce_0_ifr').clear().type("My name is scooby {ctrl+a}");

        cy.get("[title='Bold']").click()
    })

    it.only('approach three by using cypress-iframe plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')
        
        cy.iframe('#mce_0_ifr').clear().type('Iframe by cypress Iframe plugin{ctrl+a}')
        cy.get("[title='Bold']").click()

    })
})
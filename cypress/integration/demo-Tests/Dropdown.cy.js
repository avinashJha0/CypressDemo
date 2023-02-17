describe('Handle Dropdown',()=>{

    it.skip('Dropdown with select', ()=>{
         cy.visit("https://www.zoho.com/commerce/free-demo.html")
         cy.get('.globalcountrycode').select('Italy')
         .should('have.value','Italy')
    })

    it.skip('Dropdown without select', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Italy')
   })

   it('Dropdown Autoselect', ()=>{
    cy.visit("https://www.google.com/")
    cy.get('.gLFyf').type('del')

    cy.get(".eIPGRd").each(($el, index, $list) =>{
        if($el.text()=='delhivery'){
            cy.wrap($el).click()
        }
    })

  //  cy.xpath("(//ul[@role='listbox'])[1]").should('contain','delhivery').click()

    
})
})
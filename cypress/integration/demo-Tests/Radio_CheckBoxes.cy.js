describe('RadioButton And CheckBoxes', () =>{

    it('RadioButton', ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //verify visibility radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')
       // cy.get('#other').should('not.be.visible')

        //selecting radio buttion
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')       
    })

    it('Check Boxes', () =>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //Visibility of the checkbox
        cy.get('#monday').should('be.visible')

        // Select element
        cy.get('#monday').check().should('be.checked')

        // unselection
        cy.get('#monday').uncheck().should('not.be.checked')

        //selecting all checkboxes
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

    })
})
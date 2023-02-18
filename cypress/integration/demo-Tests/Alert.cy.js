/*Cypress automatically close the alerts but if 
we want to perform some actions on alert then we need to handle the same*/

describe('Alert handle', ()=>{

    it('Normal JS Alert', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        // alert window is closed by cypress

        cy.get("#result").should('have.text',"You successfully clicked an alert")
    })

    it('JS Confirm Alert', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        // alert window is closed by cypress

        cy.get("#result").should('have.text',"You clicked: Ok")

    })

    it('JS Confirm Alert cancel', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',()=> false)
        cy.get("#result").should('have.text',"You clicked: Cancel")

    })

    it('JS Prompt alert', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('new message for prompt')
        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('#result').should("have.text",'You entered: new message for prompt')

        // cy.on('window:prompt',()=> false)
        // cy.get("button[onclick='jsPrompt()']").click();

        // cy.get('#result').should("have.text",'You entered: null')
    })

    it('Authenticated Alert', ()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username: 'admin',password:'admin'}})

        cy.get("div[class='example'] p").should("contain",'Congratulations! You must have the proper credentials.')
    })
})
describe('Assertions demo', () =>{

    it('Implicit Assertions', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //should and
        cy.url().should('include','orangehrmlive') //include keyword
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // eq keyword
        cy.url().should('contain','orangehrmlive') // contain keyword

        cy.get("[name='username']").type("Admin") //provide value into input box
        cy.get("[name='username']").should('have.value',"Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[name='password']").should('have.value',"admin123")
        cy.get("[type='submit']").click()

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.url().should('include','index')
        cy.url().should('contain','dashboard')
        
        //and
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        .and('include','index')
        .and('contain','dashboard')
        .and('not.contain','avinash') // negative

        cy.title().should('include','OrangeHRM')
        .and('eq','OrangeHRM')
        .and('contain','Orange')

        cy.get('.oxd-brand-banner > img').should('be.visible')
        .and('exist')


        cy.xpath('//a').should('have.length',7)
    })

    it('Explicit Assertions', () =>{

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.get("[name='username']").type("Admin") //provide value into input box
       //cy.get("[name='username']").should('have.value',"Admin")
       cy.get("[name='password']").type("admin123")
       //cy.get("[name='password']").should('have.value',"admin123")
       cy.get("[type='submit']").click()

       let expName = 'Dashboard';
       let expName1 = 'Avi';

       cy.xpath("//h6[normalize-space()='Dashboard']")
       .then( (x)=>{
        
        let actName=x.text()

        //BDD Style
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName1)

        //TDD Style
        assert.equal(actName,expName)
        assert.notEqual(actName,expName1)

       })

    })


})
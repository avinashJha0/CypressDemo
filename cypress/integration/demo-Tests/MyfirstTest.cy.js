describe('My First Test', () =>{

    it('test1-VerifyTestPositive', () =>{

      cy.visit("https://www.guru99.com/");

      cy.title().should('eq', 'Meet Guru99 – Free Training Tutorials & Video for IT Courses')

    })

    it('test2-VerifyTestNegative', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
        cy.title().should('eq', 'OrangeHRM123')
  
      })

})
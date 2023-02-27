describe('Fixtures and Data driven Testing',()=>{

    it('Login',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('OrangeHRMData').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected)
        })

    })

    // let userdata;
    // before(()=>{
    //     cy.fixture('OrangeHRMData').then((data)=>{
    //         userdata=data;
    //     })
    // })

    // it('Login with before hook',()=>{
        
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    //         cy.get("input[placeholder='Username']").type(userdata.username)
    //         cy.get("input[placeholder='Password']").type(userdata.password)
    //         cy.get("button[type='submit']").click()
    //         cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected)

    // })

    it.only('Login with multiple data sets ',()=>{

        cy.fixture('OrangeHRMData2').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()

                if(userdata.username=='Admin'&&userdata.password=='admin123'){
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected)
                    cy.get('.oxd-userdropdown-name').click()
                    cy.xpath("//a[normalize-space()='Logout']").click();
                    cy.wait(5000)
                }else{
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected)
                }
            })

        })
        


    })


})
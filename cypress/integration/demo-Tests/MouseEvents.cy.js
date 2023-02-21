describe('Handle Mouse Events',()=>{

    it('MouseHover',()=>{

        cy.visit('https://demo.opencart.com/')
        cy.get(".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").should('not.be.visible')
        
        cy.xpath("//a[text()='Desktops']").trigger('mouseover').click()

        cy.get(".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").should("be.visible")


    })

    it('Right click',()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get(".context-menu-list.context-menu-root").should('not.be.visible')
        
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')

        cy.get(".context-menu-list.context-menu-root").should("be.visible")
       cy.get('.context-menu-icon-edit').click()

        cy.get(".context-menu-one.btn.btn-neutral").rightclick()

        cy.get(".context-menu-list.context-menu-root").should("be.visible")


    })

    it('Double click',()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get(".context-menu-list.context-menu-root").should('not.be.visible')
        
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')

        cy.get(".context-menu-list.context-menu-root").should("be.visible")
       cy.get('.context-menu-icon-edit').click()

        cy.get(".context-menu-one.btn.btn-neutral").rightclick()

        cy.get(".context-menu-list.context-menu-root").should("be.visible")


    })

    it('Drag and Drop click',()=>{

        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.wait(3000)
        cy.get("#box1").drag('#box101',{force:true})


    })

    it.only('Drag and Drop click',()=>{

        cy.visit('https://www.wikipedia.org/')
        cy.wait(3000)
        cy.get("a[href='https://meta.wikimedia.org/wiki/Privacy_policy']").scrollIntoView()


    })
})
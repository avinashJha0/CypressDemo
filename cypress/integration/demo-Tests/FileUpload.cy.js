describe('Handle File Uploads', ()=>{

    it('Single file upload', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('jmeter.txt')
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('File Upload rename', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({ filePath: 'jmeter.txt', fileName: 'Rename.txt' })
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        cy.get("#uploaded-files").should('contain','Rename.txt')       
    })

    it('File upload drag and drop', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('jmeter.txt', { subjectType: 'drag-n-drop' })
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        cy.get("#uploaded-files").should('contain','jmeter.txt')   
        
    })

    it('Multiple file upload', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile(['jmeter.txt','Second.txt'])
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        cy.get("#uploaded-files").should('contain','Second.txt') 
        
    })

    it('File upload - shadow dom', ()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/")

       cy.get('.smart-ui-component').shadow().find('.smart-browse-input',{includeShadowDom:true}).click()
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile(['jmeter.txt','Second.txt'])
        cy.get('smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(4) > smart-button:nth-child(1) > button:nth-child(1)').click()
    })

})
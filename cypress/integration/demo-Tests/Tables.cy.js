describe('Handle Tables', () => {

    beforeEach('Login', () => {

        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.xpath("//a[text()=' Customers']").click()
        cy.xpath("//a[text()='Customers']").click()

    })

    it('Check rows and columns number', () => {
        let numberOfRows = cy.get("table[class='table table-bordered table-hover']>tbody>tr");
        console.log(" The umber of rows in table are : " + numberOfRows)
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)

        let numberOfColumns = cy.get("table[class='table table-bordered table-hover']>thead>tr>td");
        console.log(" The umber of Columns in table are : " + numberOfColumns)
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7)
    })

    it('Check cell data from specific row and column', () => {

        cy.tableData(2, 3).should('have.text', 'olaola@das.com')
        cy.tableData(4, 2).should('have.text', '!Goran Krezic!')
        cy.tableData(5, 4).should('have.text', 'Default')
        cy.tableData(6, 6).should('have.text', '07/02/2023')
        cy.tableData(10, 3).should('have.text', 'rrr@gmail.com')
    })

    it('Read all the rows & coumns data in the first page', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })
    })

    it('Pagination', () => {
        let myText;
        let totalPages;
        cy.get(".col-sm-6.text-end").then((e) => {
            myText = e.text();
            totalPages = myText.substring(myText.indexOf("(") + 1, myText.indexOf("Pages") - 1)
            cy.log("Total number of pages in the pagination are : " + totalPages)
        })

        let totalPagesRun = 5;

        for (let p = 1; p <= totalPagesRun; p++) {
            if (totalPagesRun > 1) {

                cy.log('Active page is : ' + p)


                cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click()
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get("td").each(($col, index, $cols) => {
                                cy.log($col.text());
                            })
                        })
                    })




            }
        }
    })

})
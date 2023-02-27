describe('', ()=>{
    //Before
    //After
    //BeforeEach
    //AfterEach

    before(()=>{

        cy.log("Launch app")
    })

    beforeEach(()=>{

        cy.log("Login")
    })

    afterEach(()=>{

        cy.log("Logout")
    })

    it('Search',()=>{
        cy.log("This is simple search")

    })

    it('Advance Search',()=>{
        cy.log("This is advance search")
    })

    it('Listing Products',()=>{
        cy.log("This is Listing products")
    })

    after(()=>{

        cy.log("Close -- after hook")
    })
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
///<reference types="cypress-iframe" />
///<reference types="@4tw/cypress-drag-drop" />
///<reference types="cypress-file-upload" />

Cypress.Commands.add('getiframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

Cypress.Commands.add('tableData',(rowNumber, columnNumber)=>{
    let getText ;
    cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child("+rowNumber+")>td:nth-child("+columnNumber+")")
    .then(($value) => {
        getText = $value.text()
    })
    return getText;
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

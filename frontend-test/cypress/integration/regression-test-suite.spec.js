/// <reference types="cypress" />

// This is a test suite
describe('Regression test suite', function(){
    // This is a test case
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000/login')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get('#app > div > form > div:nth-child(1) > input[type=text]').type('tester01')
        cy.get('#app > div > form > div:nth-child(2) > input[type=password]').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('#app > div > form > div.field.action > button').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

})
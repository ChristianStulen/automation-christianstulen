/// <reference types="cypress" />
/*
// This is a test suite
describe('Regression test suite',() =>{
    // This is a test case
    it('Perform valid login',() =>{
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
*/
describe('Regression test suite',() => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get('#app > div > form > div:nth-child(1) > input[type=text]').type('tester01')
        cy.get('#app > div > form > div:nth-child(2) > input[type=password]').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('#app > div > form > div.field.action > button').click()
        cy.contains('Tester Hotel Overview')
    })
    it('Create and delete room',() =>{
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Create Room')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('single')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('2')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('2500')
        cy.get(':nth-child(6) > select').select('sea_view')
        cy.get('.blue').click()
        cy.contains('Create Room')
        cy.contains('Floor 2, Room 103')
        cy.get(':nth-child(3) > .action').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Floor 2, Room 103').should('not.exist')
        
        
    })

})
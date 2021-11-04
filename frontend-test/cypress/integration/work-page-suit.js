/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'

const loginName = 'tester01'
const password = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'

// test suite
describe(' Test suite', function(){

    beforeEach(()=>{
        cy.visit('http://localhost:3000/login')
        indexFuncs.checkTitleOfIndexPage(cy)

        indexFuncs.performValidLogin(cy, loginName, password, 'Tester Hotel Overview' )
        dashboardFuncs.performLogout(cy, 'Login')
    })

    // test case
    /*
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, loginName, password, 'Tester Hotel Overview' )
        dashboardFuncs.performLogout(cy, 'Login')
        
    })
    */
    it('Create and delete room',() =>{
        //login
        cy.get(':nth-child(1) > .btn').click() //click Rooms
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
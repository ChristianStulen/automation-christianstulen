/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as createroomFuncs from '../pages/createRoomPage'

const loginName = 'tester01'
const password = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'

// test suite
describe(' Test suite', function(){

    beforeEach(()=>{
        cy.visit('http://localhost:3000/login')
        indexFuncs.checkTitleOfIndexPage(cy)

        indexFuncs.performValidLogin(cy, loginName, password, 'Tester Hotel Overview' )
        dashboardFuncs.checkTitleOfDashboardPage(cy)
    })


    // test case
    /*
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, loginName, password, 'Tester Hotel Overview' )
        dashboardFuncs.performLogout(cy, 'Login')
        
    })
    */
    it('Create and delete room',() =>{
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.checkTitleOfRooms(cy)
        roomsFuncs.goToCreateRoom(cy)
        createroomFuncs.checkTitleOfCreateRoom(cy)
        createroomFuncs.addCategory(cy, 'single')
        createroomFuncs.addRoomNumber(cy, '103')
        createroomFuncs.addFloorNumber(cy, '2')
        createroomFuncs.addAvailability(cy, true)
        createroomFuncs.addPrice(cy, '2500')
        createroomFuncs.addFeature(cy, 'sea_view')
        createroomFuncs.saveNewRoom(cy)
        roomsFuncs.checkTitleOfRooms
        cy.contains('Create Room')
        cy.contains('Floor 2, Room 103')
        cy.get(':nth-child(3) > .action').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Floor 2, Room 103').should('not.exist')
        
    })
})
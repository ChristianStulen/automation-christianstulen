/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as createroomFuncs from '../pages/createRoomPage'
import * as billsFuncs from '../pages/billsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as reservationsFuncs from '../pages/reservationsPage'


const loginName = 'tester01'
const password = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'

// test suite
describe(' Test suite', function(){

    beforeEach(()=>{
        cy.visit('http://localhost:3000/login')
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })
    

    // test cases
    
    // Log in and out
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, loginName, password )
        
        
    })

    // Checks if you can navigate back and forth on the diffrent menues
   it('Navigate everywhere', () =>{
    indexFuncs.performValidLogin(cy, loginName, password )
    dashboardFuncs.checkTitleOfDashboardPage(cy)
    dashboardFuncs.goToRooms(cy)
    roomsFuncs.checkTitleOfRooms(cy)
    roomsFuncs.goBack(cy)
    dashboardFuncs.checkTitleOfDashboardPage(cy) 
    dashboardFuncs.goToClient(cy)
    clientsFuncs.checkTitleOfClients(cy)
    clientsFuncs.goBack(cy)
    dashboardFuncs.checkTitleOfDashboardPage(cy) 
    dashboardFuncs.goToBills(cy)
    billsFuncs.checkTitleOfBills(cy)
    billsFuncs.goBack(cy)
    dashboardFuncs.checkTitleOfDashboardPage(cy)
    dashboardFuncs.goToReservation(cy)
    reservationsFuncs.checkTitleOfReservations(cy)
    reservationsFuncs.goBack(cy)
    dashboardFuncs.checkTitleOfDashboardPage(cy)
   
    
   })
    
    // Creates and delete a room.
    it('Create and delete room',() =>{
        indexFuncs.performValidLogin(cy, loginName, password )
        dashboardFuncs.checkTitleOfDashboardPage(cy)
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.checkTitleOfRooms(cy)
        roomsFuncs.goToCreateRoom(cy)
        createroomFuncs.checkTitleOfCreateRoom(cy)
        createroomFuncs.addCategory(cy, 'single')
        createroomFuncs.addRoomNumber(cy, '303')
        createroomFuncs.addFloorNumber(cy, '3')
        createroomFuncs.addAvailability(cy, true)
        createroomFuncs.addPrice(cy, '3500')
        createroomFuncs.addFeature(cy, 'sea_view')
        createroomFuncs.saveNewRoom(cy)
        roomsFuncs.checkTitleOfRooms(cy)
        roomsFuncs.assertRoom(cy, 'Floor 3, Room 303')
        roomsFuncs.deleteRoom(cy, ':nth-child(3)', 'Floor 3, Room 303')
        
    })
    
    // Creates a room
    it('Create a room',() =>{
        indexFuncs.performValidLogin(cy, loginName, password )
        dashboardFuncs.checkTitleOfDashboardPage(cy)
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.checkTitleOfRooms(cy)
        roomsFuncs.goToCreateRoom(cy)
        createroomFuncs.checkTitleOfCreateRoom(cy)
        createroomFuncs.addCategory(cy, 'double')
        createroomFuncs.addRoomNumber(cy, '203')
        createroomFuncs.addFloorNumber(cy, '2')
        createroomFuncs.addAvailability(cy, true)
        createroomFuncs.addPrice(cy, '2500')
        createroomFuncs.addFeature(cy, 'sea_view')
        createroomFuncs.saveNewRoom(cy)
        roomsFuncs.checkTitleOfRooms(cy)
        roomsFuncs.assertRoom(cy, 'Floor 2, Room 203')
        

    })
    
    after(()=>{
        cy.visit('http://localhost:3000/login')
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, loginName, password )
        dashboardFuncs.goToRooms(cy)
        roomsFuncs.checkTitleOfRooms(cy)
        roomsFuncs.assertRoom(cy, 'Floor 2, Room 203')
        roomsFuncs.deleteRoom(cy, ':nth-child(3)', 'Floor 2, Room 203')
    })
   

    
    
    
})

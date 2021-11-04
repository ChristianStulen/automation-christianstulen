/// <reference types="cypress" />

// elements
const logoutButton = '.user > .btn'
const titleOfDashboardPage = 'Testers Hotel'
const roomsButton =':nth-child(1) > .btn'
const clientsButton = ':nth-child(2) > .btn'
const billsButton = ':nth-child(3) > .btn'
const reservationButton = ':nth-child(4) > .btn'

// actions / functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}
function goToRooms(cy){
    cy.get(roomsButton).click()

}
function goToClient(cy){
    cy.get(clientsButton).click()

}
function goToBills(cy){
    cy.get(billsButton).click()

}
function goToReservation(cy){
    cy.get(reservationButton).click()

}

// export
module.exports = {
    checkTitleOfIndexPage,
    performLogout,
    goToEditRoom
}
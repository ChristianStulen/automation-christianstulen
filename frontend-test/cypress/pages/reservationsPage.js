/// <reference types="cypress" />

// elements
const titleOfReservationsPage = 'Create Reservation'
const backButton = ':nth-child(3) > .btn'

// actions / functions
function checkTitleOfReservations(cy){
    cy.contains(titleOfReservationsPage)

}
function goBack(cy){
    cy.get(backButton).click()
}

// export
module.exports ={
    checkTitleOfReservations,
    goBack

}
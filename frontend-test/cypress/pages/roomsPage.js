/// <reference types="cypress" />

// elements
const titleOfRoomsPage = 'Create Room'
const createRoomButton = 'h2 > .btn'
const createRoomAssertion = 'New Room'
const dotMenuEdit = '.menu > :nth-child(1)'
const dotMenuDelete = '.menu > :nth-child(2)'
const backButton = ':nth-child(3) > .btn'



// actions / functions
function checkTitleOfRooms(cy){
    cy.contains(titleOfRoomsPage)

}
function goToCreateRoom(cy){
    cy.get(createRoomButton).click()

}
 
function deleteRoom(cy, roomNumberID, roomName){
    cy.get(roomNumberID +' > .action').click()
    cy.get(dotMenuDelete).click()
    cy.contains(roomName).should('not.exist')

}

function goToEditRoom(cy, roomNumberID, ){
    cy.get(roomNumberID+' > .action').click()
    cy.get(dotMenuEdit).click()

}

function goBack(cy){
    cy.get(backButton).click()
}

function assertRoom(cy, roomName){
    cy.contains(cy, roomName)
}


// export
module.exports = {
    checkTitleOfRooms,
    goToCreateRoom,
    deleteRoom,
    goToEditRoom,
    goBack 
}
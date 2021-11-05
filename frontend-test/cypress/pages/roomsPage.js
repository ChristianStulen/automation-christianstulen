/// <reference types="cypress" />

// elements
const titleOfRoomsPage = 'Create Room'
const createRoomButton = 'h2 > .btn'
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
    cy.wait(300)
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
function assertRoomName(cy, roomNumberID, roomName){
    cy.get('.rooms > '+roomNumberID).contains(roomName)
}
function assertRoomCategory(cy, roomNumberID, roomCategory){
    cy.get('.rooms > '+roomNumberID).contains(roomCategory)
}
function assertRoomAvailability(cy, roomNumberID, roomAvailable){
    cy.get('.rooms > '+roomNumberID).contains(roomAvailable)
}
function assertRoomPrice(cy, roomNumberID, roomPrice){
    cy.get('.rooms > '+roomNumberID).contains(roomPrice)
}
function assertRoomFeatures(cy, roomNumberID, roomFeature){
    cy.get('.rooms > '+roomNumberID).contains(roomFeature)
}

// export
module.exports = {
    checkTitleOfRooms,
    goToCreateRoom,
    deleteRoom,
    goToEditRoom,
    goBack,
    assertRoomName,
    assertRoomCategory,
    assertRoomAvailability,
    assertRoomPrice,
    assertRoomFeatures

}
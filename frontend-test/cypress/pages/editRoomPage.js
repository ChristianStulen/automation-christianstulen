/// <reference types="cypress" />

// elements
const category = ':nth-child(3) > select'
const roomNumber = ':nth-child(4) > input'
const floorNumber = ':nth-child(5) > input'
const aviableSqr = '.checkbox'
const priceValue = ':nth-child(7) > input'
const features = ':nth-child(8) > select'
const saveButton = '.blue'
// actions / functions
function checkTitleOfEditRoom(cy, RoomNr){
    cy.contains(RoomNr)
}
function editCategory(cy, choice){
    cy.get(category).select(choice)
}

function editRoomNumber(cy, roomNr){
    cy.get(roomNumber).clear().type(roomNr)
}

function editFloorNumber(cy, floorNr){
    cy.get(floorNumber).clear().type(floorNr)
}

function changeAvailability(cy, changeAvailable){
    if (changeAvailable == true) cy.get(aviableSqr).click()
}

function editPrice(cy, price){
    cy.get(priceValue).clear().type(price) 
}

function editFeature(cy, choice){    
    cy.get(features).select(choice)
}

function saveEditedRoom(cy){
    cy.get(saveButton).click()
}


// export
module.exports = {
    checkTitleOfEditRoom,
    editCategory,
    editRoomNumber,
    editFloorNumber,
    changeAvailability,
    editPrice,
    editFeature,
    saveEditedRoom
}
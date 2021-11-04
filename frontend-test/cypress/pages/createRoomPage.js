/// <reference types="cypress" />

// elements
const assertRoom = 'New Room'
const category = ':nth-child(1) > select'
const roomNumber = ':nth-child(2) > input'
const floorNumber = ':nth-child(3) > input'
const aviableSqr = '.checkbox'
const priceValue = ':nth-child(5) > input'
const features = ':nth-child(6) > select'
const saveButton = '.blue'
// actions / functions
function checkTitleOfCreateRoom(cy){
    cy.contains(assertRoom)
}
function addCategory(cy, choice){
    cy.get(category).select(choice)
}

function addRoomNumber(cy, roomNr){
    cy.get(roomNumber).type(roomNr)
}

function addFloorNumber(cy, floorNr){
    cy.get(floorNumber).type(floorNr)
}

function addAvailability(cy, isAvailable){
    if (isAvailable == true) cy.get(aviableSqr).click()
}

function addPrice(cy, price){
    cy.get(priceValue).type(price) 
}

function addFeature(cy, choice){    
    cy.get(features).select(choice)
}

function saveNewRoom(cy){
    cy.get(saveButton).click()
}


// export
module.exports = {
    checkTitleOfCreateRoom,
    addCategory,
    addRoomNumber,
    addFloorNumber,
    addAvailability,
    addPrice,
    addFeature,
    saveNewRoom
}
/// <reference types="cypress" />

// elements
const titleOfClientsPage = 'Create Client'
const backButton = ':nth-child(3) > .btn'

// actions / functions
function checkTitleOfClients(cy){
    cy.contains(titleOfClientsPage)

}
function goBack(cy){
    cy.get(backButton).click()
}

// export
module.exports ={
    checkTitleOfClients,
    goBack
}
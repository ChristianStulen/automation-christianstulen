/// <reference types="cypress" />

// elements
const logoutButton = '.user > .btn'
const titleOfDashboardPage = 'Testers Hotel'

// actions / functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

// export
module.exports = {
    checkTitleOfIndexPage,
    performLogout
}
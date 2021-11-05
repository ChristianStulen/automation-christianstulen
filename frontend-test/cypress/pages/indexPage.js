/// <reference types="cypress" />

// elements
const usernameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

// actions / functions
function checkTitleOfIndexPage(cy, contentToConfirm){
    cy.contains(contentToConfirm)
}

function performValidLogin(cy, username, password){
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
}
    

// export
module.exports = {

    checkTitleOfIndexPage,
    performValidLogin

}
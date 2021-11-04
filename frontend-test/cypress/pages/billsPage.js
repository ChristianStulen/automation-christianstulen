/// <reference types="cypress" />

// elements
const titleOfBillsPage = 'Create Bill'
const backButton = ':nth-child(3) > .btn'

// actions / functions
function checkTitleOfBills(cy){
    cy.contains(titleOfBillsPage)

}
function goBack(cy){
    cy.get(backButton).click()
}

// export
module.exports ={
    checkTitleOfBills,
    goBack
}
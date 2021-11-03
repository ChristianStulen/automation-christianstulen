/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'

const loginName = ''
const password

// test suite
describe(' Test suite', function(){

    this.beforeEach(()=>{
        cy.visit('http://localhost:3000/login')
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    // test case
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview' )
        dashboardFuncs.performLogout(cy, 'Login')
        
    })
})
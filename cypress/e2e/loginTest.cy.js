/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.app_logo').should('be.visible')
  })
})
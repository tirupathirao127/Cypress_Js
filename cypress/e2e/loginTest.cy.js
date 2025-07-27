/// <reference types="cypress" />

describe('login tests', () => {
  it('login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.app_logo').should('be.visible')
  })

  it('login with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('#user-name').type('invalid_user')
    cy.get('#password').type('invalid_password')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]').contains("Username and password do not match any user in this service")
  })

})
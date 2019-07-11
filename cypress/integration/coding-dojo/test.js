/// <reference types="Cypress" />

context('All', () => {
    it('Open users page', () => {
        cy.visit('/')
        cy.get('[data-test-id="usersLink"]').click()
    })

    it('Click to add user', () => {
        cy.visit('/users')
        cy.get('button').click()
    })

    it('fill in the Firstname in the form to add user', () => {
        cy.get('[data-test-id="userFirstNameField"]')
        .type('Toto').should('have.value', 'Toto')
    })

    it('fill in the Lastname in the form to add user', () => {
        cy.get('[data-test-id="userLastNameField"]')
        .type('Titi').should('have.value', 'Titi')
    })

    it('fill in the Address in the form to add user', () => {
        cy.get('[data-test-id="userAddressField"]')
        .type('Tutu').should('have.value', 'Tutu')
    })

    it('submit add user form', () => {
        cy.get('form').submit().next().should()
    })
})
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade de Pré Cadastro', () => {
    let person = {}
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('minha-conta')

        person = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: `faker_${faker.internet.email()}`,
            password: faker.internet.password()
        }
    })
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar o pré cadastro com sucesso.', () => {
        cy.get('#reg_email').type(person.email)
        cy.get('#reg_password').type(person.password)
        cy.get(':nth-child(4) > .button').click() 
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(person.firstName)
        cy.get('#account_last_name').type(person.lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

    it.only('Deve completar o pré cadastro com sucesso usando comandos customizados.', () => {
        cy.preCadastro(person.email, person.password, person.firstName, person.lastName)
    })
})
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade de Pré Cadastro', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar o pré cadastro com sucesso.', () => {
        const person = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: `faker_${faker.internet.email()}`,
            password: faker.internet.password()
        }

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

})
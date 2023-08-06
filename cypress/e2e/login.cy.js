/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

context('Funcionalidade Login', () => {
    
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    afterEach(() => {
        cy.screenshot()
    })
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type(faker.internet.email())
        cy.get('#password').type(faker.internet.password())
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type(faker.internet.password())
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail')
    })
})
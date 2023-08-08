/// <reference types="cypress" /> 

describe('Funcionalidade de Endereço - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('minha-conta')
        cy.fixture('perfil').then(fPerfil => {
            cy.login(fPerfil.usuario, fPerfil.senha)
        })
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {})
})

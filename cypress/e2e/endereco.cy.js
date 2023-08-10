/// <reference types="cypress" /> 
import EnderecoPage from '../support/pages/endereco.page'
import dsEnderecos from '../fixtures/enderecos.json'

describe('Funcionalidade de Endereço - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('minha-conta')
        cy.fixture('perfil').then(fPerfil => {
            cy.login(fPerfil.usuario, fPerfil.senha)
        })
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Maria', 'Silva', 'Empresa Teste', 'Brasil', 'Rua dos Bobos', 'zero', 'Boa Vista', 'Roraima', '69000000', '95 999999999', 'email@company.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    })

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        dsEnderecos.forEach(endereco => {
            EnderecoPage.editarEnderecoFaturamento({...endereco})
            cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        });
    })
})

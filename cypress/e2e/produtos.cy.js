/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('produtos')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    })

    it('Deve adicionar um produto ao carrinho', () => {
        var produto = 'Abominable Hoodie'
        var quantidade = 2

        cy.get('[class="product-block grid"]').contains(produto).click()

        cy.get('.button-variable-item-S').click().click() // forçando o clique 
        cy.get('.button-variable-item-Green').click().click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', `${quantidade} × “${produto}” foram adicionados no seu carrinho.`)
    })

    it.only('Deve adicionar um produto ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'S', 'Green', 2)
    })
});
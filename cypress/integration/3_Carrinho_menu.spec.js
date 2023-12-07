/// <reference types="cypress" />

describe('Carrinho', () => {
    it('Adicionar carrinho menu',() =>{
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce'); 
        cy.get('[data-test=login-button]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.wait(500);
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
        cy.wait(500);
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click();
        cy.wait(500);
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click();
        cy.wait(500);
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click();
        cy.wait(500);
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.wait(500);
    });
    it('Remover carrinho menu', () =>{
        cy.get('[data-test=remove-sauce-labs-backpack]').click();
        cy.wait(500);
        cy.get('[data-test=remove-sauce-labs-bike-light]').click();
        cy.wait(500);
        cy.get('[data-test=remove-sauce-labs-bolt-t-shirt]').click();
        cy.wait(500);
        cy.get('[data-test=remove-sauce-labs-fleece-jacket]').click();
        cy.wait(500);
        cy.get('[data-test=remove-sauce-labs-onesie]').click();
        cy.wait(500);
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
        cy.wait(500);
    });
});
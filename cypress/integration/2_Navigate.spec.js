/// <reference types="cypress" />

describe('Navigate', () => {
    it('Navegar filtro',() =>{
        cy.get('[data-test=product_sort_container]').select('za');
        cy.wait(1000);
        cy.get('[data-test=product_sort_container]').select('lohi');
        cy.wait(1000);
        cy.get('[data-test=product_sort_container]').select('hilo');
        cy.wait(1000);
        cy.get('[data-test=product_sort_container]').select('az');
    });
    it('Navegar menu', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.wait(1000);
        cy.get('#react-burger-cross-btn').click();
    });
    it('Navegar item', () => {
        cy.get('#item_4_img_link').click();

        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');
        cy.get('[data-test=login-button]').click();
        cy.wait(1000);
        cy.get('#item_4_img_link').click();
        cy.wait(1000);
        cy.get('[data-test=back-to-products]').click();
        cy.wait(1000);
        cy.get('#item_0_title_link > .inventory_item_name').click();
        cy.wait(1000);
        cy.get('[data-test=back-to-products]').click();
        cy.wait(1000);
        cy.get('#item_1_title_link > .inventory_item_name').click();
        cy.wait(1000);
        cy.get('[data-test=back-to-products]').click();
        cy.wait(1000);
        cy.get('#item_5_title_link > .inventory_item_name').click();
        cy.wait(1000);
        cy.get('[data-test=back-to-products]').click();
        cy.wait(1000);
        cy.get('#item_2_title_link > .inventory_item_name').click();
        cy.wait(1000);
        cy.get('[data-test=back-to-products]').click();
        cy.wait(1000);
        cy.get('#item_3_title_link > .inventory_item_name').click();
        cy.wait(1000);
        cy.get('#react-burger-menu-btn').click();
        cy.wait(1000);
        cy.get('#inventory_sidebar_link').click();
        cy.wait(1000);
    });
});
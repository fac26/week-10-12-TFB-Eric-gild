import { ManageStockCard } from '../../src/components/ManageStockCard';

it('mounts', () => {
  cy.mount(<ManageStockCard />);

  it('increments the quantity when the + button is clicked', () => {
    cy.get('.ManageStockCard').within(() => {
      cy.contains('+').click();
      cy.get('.quantity').should('have.text', '1');
    });
  });

  it('decrements the quantity when the - button is clicked', () => {
    cy.get('.ManageStockCard').within(() => {
      cy.contains('-').click();
      cy.get('.quantity').should('have.text', '-1');
    });
  });
});

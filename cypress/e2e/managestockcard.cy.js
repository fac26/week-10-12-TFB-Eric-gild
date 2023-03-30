describe('ManageStockCard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/manage-food');
  });

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

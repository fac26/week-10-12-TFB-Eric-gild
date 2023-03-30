describe('NavBar component', () => {
  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/available-food');
    cy.get('[data-cy="bowl-icon"]').should('exist');
  });
});

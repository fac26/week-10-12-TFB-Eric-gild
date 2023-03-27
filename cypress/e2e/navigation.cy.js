describe('NavBar component', () => {
  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/find-food');
    cy.get('[data-cy="help"]').should('exist');
    cy.get('[data-cy="search"]').should('exist');
    cy.get('[data-cy="bookmark"]').should('exist');
    cy.get('[data-cy="profile"]').should('exist');
    cy.get('[data-cy="bowl-icon"]').should('exist');
  });
});

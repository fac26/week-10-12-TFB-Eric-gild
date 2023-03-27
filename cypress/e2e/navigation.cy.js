describe('NavBar component', () => {
  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/explore-main');
    cy.get('[data-cy="home"]').should('exist');
    cy.get('[data-cy="add"]').should('exist');
    cy.get('[data-cy="ranking-star"]').should('exist');
    cy.get('[data-cy="book-contacts"]').should('exist');
  });
});

describe('NavBar component', () => {
  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/explore-main');
    cy.get('[data-cy="home"]').should('exist');
  });

  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/reflect-add-image');
    cy.get('[data-cy="add"]').should('exist');
  });

  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/explore-rankings');
    cy.get('[data-cy="ranking-star"]').should('exist');
  });

  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/reflect-personal-contact');
    cy.get('[data-cy="book-contacts"]').should('exist');
  });
});

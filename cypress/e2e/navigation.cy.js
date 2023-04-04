describe('NavBar component', () => {
  it('should exist on the find food page', () => {
    cy.visit('http://localhost:3000/available-food');
    cy.get('[data-cy="bowl-icon"]', { timeout: 10000 }).should('exist');
  });

  it('should exist on the reservations page', () => {
    cy.visit('http://localhost:3000/reservations-page');
    cy.get('nav').should('exist');
    cy.wait(500); // wait for 500 milliseconds
    cy.get('[data-cy="bookmark"]').should('exist');
  });
});

describe('Sign In Functionality', () => {
  it('Logs in successfully', () => {
    cy.fixture('testData').then((testData) => {
      cy.visit('http://localhost:3000/sign-in');
      cy.get('[type="email"]').type(testData.email);
      cy.get('[type="password"]').type(testData.password);
      cy.contains('button', 'Sign in').click();
      cy.url().should('include', 'http://localhost:3000/sign-in');
    });
  });
});

cy.get('form').within(($form) => {
  // cy.get() will only search for elements within form,
  // not within the entire document
  cy.get('input[name="email"]').type('john.doe@email.com');
  cy.get('input[name="password"]').type('password');
  cy.root().submit();
});

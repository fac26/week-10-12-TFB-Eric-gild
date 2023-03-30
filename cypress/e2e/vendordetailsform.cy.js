describe('Vendor details form', () => {
  it('Submitted vendor details successfully', () => {
    cy.visit('http://localhost:3000/vendor-upload-form');
    cy.get('input[name="companyname"]').type('Pret');
    cy.get('textarea[name="description"]').type('We sell food');
    cy.get('textarea[name="address"]').type('100 High Street N16');
    cy.get('input[name="phonenumber"]').type('01010010101');
    cy.get('form').submit();
  });
});

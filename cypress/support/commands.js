Cypress.Commands.add('loginUser', (email, password) => {
    cy.get('#user_email').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
})
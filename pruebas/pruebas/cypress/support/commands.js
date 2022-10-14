
Cypress.Commands.add('loginOrangePage', (user, password) => {
  cy.session("login", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.url().should("contain", "orangehrm")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    cy.get('.oxd-button').click()


  })
});

Cypress.Commands.add('loginPageTest', (user, password) => {


  cy.visit("https://opensource-demo.orangehrmlive.com/")
  cy.url().should("contain", "orangehrm")
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user)
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
  cy.get('.oxd-button').click()



});


Cypress.Commands.add('loginPco', (user, password) => {
  
  cy.session("login1", () => {
    
    
    
    cy.visit("https://pcosso-orguat.puntoscolombia.com/org/login")
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.wait(2000);
    cy.get('#username-input').type(user)
    cy.get('.btn').click()
    cy.wait(2000);
    cy.get('#login-password').type(password)
    cy.xpath("//button[@class='btn btn-primary-2']").click()


  })
});
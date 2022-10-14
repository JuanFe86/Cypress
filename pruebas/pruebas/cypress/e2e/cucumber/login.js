import {
  Before,
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "./pages/login-pages";

const loginPage = new LoginPage();

Given("I navigate to the website", () => {
  cy.loginOrangePage("Admin","admin123")
});

When("I selected search", () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  loginPage.clickOnSearch()
});

When("I selected add", () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
  loginPage.clickOnAdd()
});

When("I selected reports", () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewDefinedPredefinedReports');
  loginPage.clickOnAdd()
});

When("I selected admin", () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  loginPage.clickOnAdmin()
});



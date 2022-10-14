import {
  Before,
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "./pages/login-pages";

const loginPage = new LoginPage();

Given("I navigate to the website1", () => {
  cy.loginPageTest("Admin","admin123")
});

When("I selected search1", () => {
  
  loginPage.clickOnSearch()
});

When("I selected add1", () => {
 
  loginPage.clickOnAdd()
});

When("I selected reports1", () => {
 
  loginPage.clickOnAdd()
});

When("I selected admin1", () => {
  
  loginPage.clickOnAdmin()
});



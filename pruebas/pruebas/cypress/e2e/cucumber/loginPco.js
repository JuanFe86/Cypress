import {
  Before,
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "./pages/login-pages";

const loginPage = new LoginPage();

Given("I navigate to pco", () => {
  cy.loginPco("zyrelp0tadm7@karate.com","MhaX1s-2")
});

When("I selected gestion", () => {
  cy.visit('https://laas-dev.puntoscolombia.com/gestion-colaboradores/listar'); 
  cy.xpath("//div[@class='hidden md:inline-block ng-star-inserted']//span[@class='p-button-label'][contains(text(),'Agregar nuevo colaborador')]").click();
});



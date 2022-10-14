export class LoginPage{

    elements ={
        inputUserName: ()=> cy.xpath("//input[@placeholder='Username']"),
        inputPassword: ()=> cy.get("//input[@placeholder='Password']"),
        btnLogin: ()=> cy.get("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']"),
        btnSearch:()=> cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']"),
        btnAdd:()=> cy.xpath("//a[contains(text(),'Add Employee')]"),
        btnReports:()=> cy.xpath("//a[contains(text(),'Reports')]"),
        btnAdmin:()=> cy.xpath("//span[text()='Admin']")

    };

      typeUserName(username){
        this.elements.inputUserName().type(username);
    }

    typePassword(password){
        this.elements.inputPassword().type(password);
    }

    clickOnLogin(){
        
        this.elements.btnLogin().click();
    }

    clickOnSearch(){
        this.elements.btnSearch().click();
    }

    clickOnAdd(){
        this.elements.btnAdd().click();
    }

    clickOnReports(){
        this.elements.btnReports().click();
    }

    clickOnAdmin(){
        this.elements.btnAdmin().click();
    }

    
}
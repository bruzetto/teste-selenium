package br.com.teste.selenium.pageObjects;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.annotations.Step;

@DefaultUrl("https://inm-test-app.herokuapp.com/accounts/login/")
public class LoginInmetricsPage  extends PageObject {

    @Step("Abrir pagina de login da Inmetrics")
    public void paginaDeLoginInmetrics() {
        this.open();
    }
}

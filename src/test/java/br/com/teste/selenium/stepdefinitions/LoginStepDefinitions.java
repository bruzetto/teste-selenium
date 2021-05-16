package br.com.teste.selenium.stepdefinitions;

import io.cucumber.java.pt.Dado;
import net.thucydides.core.annotations.Steps;

public class LoginStepDefinitions {

    @Steps
    br.com.teste.selenium.pageObjects.LoginInmetricsPage LoginInmetricsPage;

    @Dado("que estou na Pagina de login da Inmetrics")
    public void que_estou_na_Pagina_de_login_da_Inmetrics() {

        LoginInmetricsPage.paginaDeLoginInmetrics();
    }
}
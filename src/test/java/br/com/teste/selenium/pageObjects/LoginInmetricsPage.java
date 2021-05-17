package br.com.teste.selenium.pageObjects;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;

@DefaultUrl("https://inm-test-app.herokuapp.com/accounts/login/")
public class LoginInmetricsPage  extends CommonPageObject {

    public void paginaDeLoginInmetrics() {

        this.open();
    }

    @FindBy(xpath="//span[contains(text(), 'Login')]")
    WebElementFacade login;

    public Boolean validarTelaDeLoginCarregada() {

        Boolean telaLoginCarregada = login.isCurrentlyVisible();

        int tentativas = 0;

        while (telaLoginCarregada == false) {

            tentativas++;
            if (tentativas > 5) {
                break;
            }

            telaLoginCarregada = login.isCurrentlyVisible();
        }

        return telaLoginCarregada;
    }


    @FindBy(xpath="//div[@id='navbarSupportedContent']//a[text()='Cadastre-se']")
    WebElementFacade cadastrese;

    public void clicarEmCadastrese() {

        cadastrese.isCurrentlyVisible();
        cadastrese.click();
    }

    @FindBy(xpath="//button[contains(text(), 'Entre')]")
    WebElementFacade botaoEntre;

    public void clicarEmBotaoEntre() {

        botaoEntre.waitUntilClickable();
        botaoEntre.click();
    }
}

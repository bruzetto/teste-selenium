package br.com.teste.selenium.pageObjects;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;

@DefaultUrl("https://inm-test-app.herokuapp.com/empregados/")
public class PrincipalInmetricsPage extends CommonPageObject {

    @FindBy(id="tabela")
    WebElementFacade tabela;

    public Boolean validarTelaPrincipalCarregada() {

        Boolean telaPrincipalCarregada = tabela.isCurrentlyVisible();

        int tentativas = 0;

        while (telaPrincipalCarregada == false) {

            tentativas++;
            if (tentativas > 5) {
                break;
            }

            telaPrincipalCarregada = tabela.isCurrentlyVisible();
        }

        return telaPrincipalCarregada;
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

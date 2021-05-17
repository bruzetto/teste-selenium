package br.com.teste.selenium.pageObjects;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;

@DefaultUrl("https://inm-test-app.herokuapp.com/accounts/signup/")
public class CadastroInmetricsPage extends CommonPageObject {

    @FindBy(name="confirmpass")
    WebElementFacade campoConfirmeASenha;

    public void confirmarSenha(String senha) {

        campoConfirmeASenha.isCurrentlyEnabled();
        campoConfirmeASenha.sendKeys(senha);
    }

    @FindBy(xpath="//button[contains(text(), 'Cadastrar')]")
    WebElementFacade botaoCadastrar;

    public void clicarNoBotaoCadastrar() {

        botaoCadastrar.waitUntilClickable();
        botaoCadastrar.click();
    }

    @FindBy(xpath="//div[contains(text(), 'Usuário já cadastrado')]")
    WebElementFacade msgUsuarioCadastrado;

    public Boolean validarSeUsuarioJaEstaCadastrado() {

        Boolean usuarioJaCadastrado = msgUsuarioCadastrado.isCurrentlyVisible();

        int tentativas = 0;

        while (usuarioJaCadastrado == false) {

            tentativas++;
            if (tentativas > 5) {
                break;
            }

            usuarioJaCadastrado = msgUsuarioCadastrado.isCurrentlyVisible();
        }

        return usuarioJaCadastrado;
    }
}
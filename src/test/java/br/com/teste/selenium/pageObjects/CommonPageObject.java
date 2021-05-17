package br.com.teste.selenium.pageObjects;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;

public class CommonPageObject extends PageObject {

    @FindBy(name="username")
    WebElementFacade campoUsuario;

    public void preencherUsuario(String usuario) {

        campoUsuario.isCurrentlyEnabled();
        campoUsuario.sendKeys(usuario);
    }

    @FindBy(name="pass")
    WebElementFacade campoSenha;

    public void preencherSenha(String senha) {

        campoSenha.isCurrentlyEnabled();
        campoSenha.sendKeys(senha);
    }
}
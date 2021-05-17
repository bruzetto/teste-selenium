package br.com.teste.selenium.stepdefinitions;

import br.com.teste.selenium.pageObjects.LoginInmetricsPage;
import br.com.teste.selenium.pageObjects.PrincipalInmetricsPage;
import br.com.teste.selenium.utils.ManipuladorPropriedades;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;

public class LoginStepDefinitions {

    LoginInmetricsPage loginInmetricsPage;
    PrincipalInmetricsPage principalInmetricsPage;

    @Dado("que estou na Pagina de login da Inmetrics")
    public void que_estou_na_Pagina_de_login_da_Inmetrics() {

        loginInmetricsPage.paginaDeLoginInmetrics();
        Assert.assertTrue("A tela de Login não foi carragada corretamente.", (loginInmetricsPage.validarTelaDeLoginCarregada() == true));
    }

    @Quando("preencho o usuario cadastrado")
    public void preencho_o_usuario_cadastrado() {

        loginInmetricsPage.preencherUsuario(ManipuladorPropriedades.getUsuario());
    }

    @Quando("preencho a senha cadastrada")
    public void preencho_a_senha_cadastrada() {

        loginInmetricsPage.preencherSenha(ManipuladorPropriedades.getSenha());
    }

    @Quando("clico no botão Entre")
    public void clico_no_botão_Entre() {

        loginInmetricsPage.clicarEmBotaoEntre();
    }

    @Entao("login é efetuado com sucesso")
    public void login_é_efetuado_com_sucesso() {

        Assert.assertTrue("A tela Principal não foi carregada corretamente após o Login.", (principalInmetricsPage.validarTelaPrincipalCarregada() == true));
    }
}
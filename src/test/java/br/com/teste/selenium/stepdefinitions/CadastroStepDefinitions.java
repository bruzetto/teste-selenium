package br.com.teste.selenium.stepdefinitions;

import br.com.teste.selenium.pageObjects.CadastroInmetricsPage;
import br.com.teste.selenium.pageObjects.LoginInmetricsPage;
import br.com.teste.selenium.utils.ManipuladorPropriedades;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;

public class CadastroStepDefinitions {

    LoginInmetricsPage loginInmetricsPage;
    CadastroInmetricsPage cadastroInmetricsPage;

    @Quando("clico em Cadastre-se")
    public void quando_clico_em_Cadastre_se() {

        loginInmetricsPage.clicarEmCadastrese();
    }

    @Quando("preencho o usuario {string}")
    public void preencho_o_usuario(String usuario) {

        cadastroInmetricsPage.preencherUsuario(usuario);
        ManipuladorPropriedades.setUsuario(usuario);
    }

    @Quando("preencho a senha {string}")
    public void preencho_a_senha(String senha) {

        cadastroInmetricsPage.preencherSenha(senha);
        ManipuladorPropriedades.setSenha(senha);
    }

    @Quando("confirmo a senha {string}")
    public void confirmo_a_senha(String senha) {

        cadastroInmetricsPage.confirmarSenha(senha);
    }

    @Quando("clico no botão cadastrar")
    public void clico_no_botao_cadastrar() {

        cadastroInmetricsPage.clicarNoBotaoCadastrar();
    }

    @Entao("usuario é cadastrado com sucesso")
    public void usuario_cadastrado_com_sucesso() {

        Assert.assertTrue("Usuário já cadastrado.", (cadastroInmetricsPage.validarSeUsuarioJaEstaCadastrado() == false));
    }
}
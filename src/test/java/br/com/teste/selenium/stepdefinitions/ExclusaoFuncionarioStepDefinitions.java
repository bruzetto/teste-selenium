package br.com.teste.selenium.stepdefinitions;

import br.com.teste.selenium.pageObjects.PrincipalInmetricsPage;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;

public class ExclusaoFuncionarioStepDefinitions {

    PrincipalInmetricsPage principalInmetricsPage;

    @Quando("clico no botão Excluir do funcionario cadastrado")
    public void clico_no_botão_Excluir_do_funcionario_cadastrado() {

        principalInmetricsPage.clicarNoBotaoExcluirDoFuncionarioCadastrado();
    }

    @Entao("funcionario é excluido com sucesso")
    public void funcionario_é_excluido_com_sucesso() {

        Assert.assertTrue("Funcionário não foi atualizado com sucesso.", (principalInmetricsPage.validarSeFuncFoiRemovido() == true));
    }
}
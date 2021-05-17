package br.com.teste.selenium.stepdefinitions;

import br.com.teste.selenium.pageObjects.PrincipalInmetricsPage;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;

public class EdicaoFuncionarioStepDefinitions {

    PrincipalInmetricsPage principalInmetricsPage;

    @Quando("clico no botão Editar do funcionario cadastrado")
    public void clico_no_botão_Editar_do_funcionario_cadastrado() {

        principalInmetricsPage.clicarNoBotaoEditarDoFuncionarioCadastrado();
    }

    @Quando("edito o {string} do funcionaro")
    public void edito_o_do_funcionaro(String cargoNovo) {

        principalInmetricsPage.editarCargoFunc(cargoNovo);
    }

    @Entao("funcionario é atualizado com sucesso")
    public void funcionario_é_atualizado_com_sucesso() {

        Assert.assertTrue("Funcionário não foi atualizado com sucesso.", (principalInmetricsPage.validarSeFuncFoiAtualizado() == false));
    }
}
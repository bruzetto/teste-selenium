package br.com.teste.selenium.stepdefinitions;

import br.com.teste.selenium.pageObjects.PrincipalInmetricsPage;
import br.com.teste.selenium.utils.ManipuladorPropriedades;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;

public class ExclusaoFuncionarioStepDefinitions {

    PrincipalInmetricsPage principalInmetricsPage;

    @Quando("clico no botão Excluir do funcionario cadastrado")
    public void clico_no_botão_Excluir_do_funcionario_cadastrado() {

        int qtdeCPF = principalInmetricsPage.quantidadeDeCPF(ManipuladorPropriedades.getCPFFunc());

        removerDuplicados(qtdeCPF);
    }

    @Quando("removo funcionarios duplicados")
    public void removo_funcionarios_duplicados() {

        int qtdeCPF = principalInmetricsPage.quantidadeDeCPF(ManipuladorPropriedades.getCPFFunc());

        if (qtdeCPF > 1) {
            removerDuplicados(qtdeCPF - 1);

        }
    }

    @Entao("funcionarios duplicados são excluidos com sucesso")
    public void funcionarios_duplicados_são_excluidos_com_sucesso() {

        int qtdeCPF = principalInmetricsPage.quantidadeDeCPF(ManipuladorPropriedades.getCPFFunc());

        if (qtdeCPF > 1) {

            removerDuplicados(qtdeCPF - 1);
        }

        Assert.assertTrue("A função de excluir não está funcionando corretamente. Deveria ter excluido o CPF: " + ManipuladorPropriedades.getCPFFunc(), (qtdeCPF == 1));
    }

    @Entao("funcionario é excluido com sucesso")
    public void funcionario_é_excluido_com_sucesso() {

        int qtdeCPF = principalInmetricsPage.quantidadeDeCPF(ManipuladorPropriedades.getCPFFunc());

        if (qtdeCPF > 1) {

            removerDuplicados(qtdeCPF - 1);
        }

        Assert.assertTrue("Funcionário não foi excluido com sucesso.", (principalInmetricsPage.validarSeFuncFoiRemovido() == true));
        Assert.assertTrue("A função de excluir não está funcionando corretamente. Deveria ter excluido o CPF: " + ManipuladorPropriedades.getCPFFunc(), (qtdeCPF == 0));
    }

    private void removerDuplicados(int qtdeCPF) {

        //REMOVER FUNCIONARIOS DUPLICADOS
        for (int i = 0; i < qtdeCPF; i++) {

            principalInmetricsPage.clicarNoBotaoExcluirDoFuncionarioCadastrado();
        }
    }
}
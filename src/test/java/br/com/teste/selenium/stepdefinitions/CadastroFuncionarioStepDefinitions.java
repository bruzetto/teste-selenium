package br.com.teste.selenium.stepdefinitions;

import br.com.teste.selenium.pageObjects.PrincipalInmetricsPage;
import br.com.teste.selenium.utils.ManipuladorPropriedades;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;

public class CadastroFuncionarioStepDefinitions {

    PrincipalInmetricsPage principalInmetricsPage;

    @Quando("clico no botão Novo Funcionário")
    public void clico_no_botão_Novo_Funcionário() {

        principalInmetricsPage.clicarEmNovoFuncionario();
    }

    @Quando("preencho a nome do funcionario {string}")
    public void preencho_a_nome_do_funcionario(String nome) {

        principalInmetricsPage.preencherNomeFuncinario(nome);
    }

    @Quando("preencho o cargo do funcionario {string}")
    public void preencho_o_cargo_do_funcionario(String cargo) {

        principalInmetricsPage.preencherCargoFunc(cargo);
    }

    @Quando("preencho o CPF do funcionario {string}")
    public void preencho_o_CPF_do_funcionario(String CPF) {

        principalInmetricsPage.preencherCPFFuncinario(CPF);
        ManipuladorPropriedades.setCPFFunc(CPF);
    }

    @Quando("preencho o salário do funcionario {string}")
    public void preencho_o_salário_do_funcionario(String salario) {

        principalInmetricsPage.preencherSalarioFunc(salario);
    }

    @Quando("preencho o sexo do funcionario {string}")
    public void preencho_o_sexo_do_funcionario(String sexo) {

        principalInmetricsPage.selecionarSexoFunc(sexo);
    }

    @Quando("preencho a admissão do funcionario {string}")
    public void preencho_a_admissão_do_funcionario(String admissao) {

        principalInmetricsPage.preencherAdmissaoFunc(admissao);
    }

    @Quando("preencho a tipo de contratação do funcionario {string}")
    public void preencho_a_tipo_de_contratação_do_funcionario(String tipoContrato) throws Exception {

        principalInmetricsPage.preencherTipoContratacaoFunc(tipoContrato);
    }

    @Quando("clico no botão Enviar")
    public void clico_no_botão_Enviar() {

        principalInmetricsPage.clicarNoBotaoEnviar();
    }

    @Entao("funcionario é cadastrado com sucesso")
    public void funcionario_é_cadastrado_com_sucesso() {

        Assert.assertTrue("Funcionário não foi cadastrado com sucesso.", (principalInmetricsPage.validarSeUsuarioFoiCadastrado() == false));
    }
}
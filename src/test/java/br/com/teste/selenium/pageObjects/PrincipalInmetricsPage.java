package br.com.teste.selenium.pageObjects;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import org.openqa.selenium.support.ui.Select;

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

    @FindBy(xpath="//a[text()='Novo Funcionário']")
    WebElementFacade novoFuncionario;

    public void clicarEmNovoFuncionario() {

        novoFuncionario.isCurrentlyVisible();
        novoFuncionario.click();
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

    @FindBy(id="inputNome")
    WebElementFacade nomeFunc;

    public void preencherNomeFuncinario(String nome) {

        nomeFunc.waitUntilEnabled();
        nomeFunc.sendKeys(nome);
    }

    @FindBy(id="cpf")
    WebElementFacade cpfFunc;

    public void preencherCPFFuncinario(String cpf) {

        cpfFunc.waitUntilEnabled();
        cpfFunc.sendKeys(cpf);
    }

    @FindBy(id = "slctSexo")
    private WebElementFacade sexoFunc;

    public void selecionarSexoFunc(String sexo) {

        sexoFunc.waitUntilVisible();
        Select dropdown = new Select(sexoFunc);
        dropdown.selectByVisibleText(sexo);
    }

    @FindBy(id = "inputAdmissao")
    private WebElementFacade inputAdmissao;

    public void preencherAdmissaoFunc(String admissao) {

        inputAdmissao.waitUntilEnabled();
        inputAdmissao.sendKeys(admissao);
    }

    @FindBy(id = "inputCargo")
    private WebElementFacade inputCargo;

    public void preencherCargoFunc(String cargo) {

        inputCargo.waitUntilEnabled();
        inputCargo.sendKeys(cargo);
    }

    @FindBy(id = "dinheiro")
    private WebElementFacade dinheiro;

    public void preencherSalarioFunc(String salario) {

        dinheiro.waitUntilEnabled();
        dinheiro.sendKeys(salario);
    }

    @FindBy(id = "clt")
    private WebElementFacade clt;

    @FindBy(id = "pj")
    private WebElementFacade pj;

    public void preencherTipoContratacaoFunc(String tpContrato) throws Exception {

        if (tpContrato.toUpperCase().equals("CLT")) {

            clt.waitUntilClickable();
            clt.click();

        } else {

            if (tpContrato.toUpperCase().equals("PJ")) {

                pj.waitUntilClickable();
                pj.click();

            } else {

                throw new Exception ("Tipo de contrato inválido: " + tpContrato + ".");
            }
        }
    }

    @FindBy(className = "cadastrar-form-btn")
    private WebElementFacade btnEnviar;

    public void clicarNoBotaoEnviar() {

        btnEnviar.waitUntilClickable();
        btnEnviar.click();
    }

    @FindBy(xpath="//strong[contains(text(), 'Usuário cadastrado com sucesso')]")
    WebElementFacade msgUsuarioCadastrado;

    public Boolean validarSeUsuarioFoiCadastrado() {

        Boolean usuarioCadastradoComSucesso = msgUsuarioCadastrado.isCurrentlyVisible();

        int tentativas = 0;

        while (usuarioCadastradoComSucesso == false) {

            tentativas++;
            if (tentativas > 5) {
                break;
            }

            usuarioCadastradoComSucesso = msgUsuarioCadastrado.isCurrentlyVisible();
        }

        return usuarioCadastradoComSucesso;
    }





}

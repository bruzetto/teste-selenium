$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/testar_excluir_funcionario.feature");
formatter.feature({
  "name": "Testar Excluir Funcionario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@TesteExcluirFuncionario"
    }
  ]
});
formatter.scenario({
  "name": "Exluir funcionario",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@TesteExcluirFuncionario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na Pagina de login da Inmetrics",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginStepDefinitions.que_estou_na_Pagina_de_login_da_Inmetrics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o usuario cadastrado",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStepDefinitions.preencho_o_usuario_cadastrado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a senha cadastrada",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStepDefinitions.preencho_a_senha_cadastrada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Entre",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginStepDefinitions.clico_no_botão_Entre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Excluir do funcionario cadastrado",
  "keyword": "Quando "
});
formatter.match({
  "location": "ExclusaoFuncionarioStepDefinitions.clico_no_botão_Excluir_do_funcionario_cadastrado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "funcionario é excluido com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "ExclusaoFuncionarioStepDefinitions.funcionario_é_excluido_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
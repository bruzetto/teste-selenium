$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/testar_login.feature");
formatter.feature({
  "name": "Testar Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@TesteLogin"
    }
  ]
});
formatter.scenario({
  "name": "Logar usuário",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@TesteLogin"
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
  "name": "login é efetuado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginStepDefinitions.login_é_efetuado_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
}); "location": "LoginStepDefinitions.que_estou_na_Pagina_de_login_da_Inmetrics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em Cadastre-se",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroStepDefinitions.quando_clico_em_Cadastre_se()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o usuario \"brunotozett4\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroStepDefinitions.preencho_o_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a senha \"Teste12%\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroStepDefinitions.preencho_a_senha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmo a senha \"Teste12%\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroStepDefinitions.confirmo_a_senha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroStepDefinitions.clico_no_botao_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario é cadastrado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroStepDefinitions.usuario_cadastrado_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
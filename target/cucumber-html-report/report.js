$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/testar_editar_funcionario.feature");
formatter.feature({
  "name": "Testar Editar Funcionario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@TesteEditarFuncionario"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Editar funcionario",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que estou na Pagina de login da Inmetrics",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o usuario cadastrado",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho a senha cadastrada",
  "keyword": "Quando "
});
formatter.step({
  "name": "clico no botão Entre",
  "keyword": "Quando "
});
formatter.step({
  "name": "clico no botão Editar do funcionario cadastrado",
  "keyword": "Quando "
});
formatter.step({
  "name": "edito o \"\u003ccargo\u003e\" do funcionaro",
  "keyword": "Quando "
});
formatter.step({
  "name": "clico no botão Enviar",
  "keyword": "Quando "
});
formatter.step({
  "name": "funcionario é atualizado com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "cargo"
      ]
    },
    {
      "cells": [
        "Analista de Testes Senior"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Editar funcionario",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@TesteEditarFuncionario"
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
  "name": "clico no botão Editar do funcionario cadastrado",
  "keyword": "Quando "
});
formatter.match({
  "location": "EdicaoFuncionarioStepDefinitions.clico_no_botão_Editar_do_funcionario_cadastrado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "edito o \"Analista de Testes Senior\" do funcionaro",
  "keyword": "Quando "
});
formatter.match({
  "location": "EdicaoFuncionarioStepDefinitions.edito_o_do_funcionaro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Enviar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.clico_no_botão_Enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "funcionario é atualizado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "EdicaoFuncionarioStepDefinitions.funcionario_é_atualizado_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
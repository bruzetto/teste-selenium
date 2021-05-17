$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/testar_cadastro_funcionario.feature");
formatter.feature({
  "name": "Testar Cadastrar Funcionario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@TesteCadastrarFuncionario"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Logar usuário",
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
  "name": "clico no botão Novo Funcionário",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho a nome do funcionario \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o cargo do funcionario \"\u003ccargo\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o CPF do funcionario \"\u003cCPF\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o salário do funcionario \"\u003csalario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o sexo do funcionario \"\u003csexo\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho a admissão do funcionario \"\u003cadmissao\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho a tipo de contratação do funcionario \"\u003ctipoContratacao\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "clico no botão Enviar",
  "keyword": "Quando "
});
formatter.step({
  "name": "funcionario é cadastrado com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "cargo",
        "CPF",
        "salario",
        "sexo",
        "admissao",
        "tipoContratacao"
      ]
    },
    {
      "cells": [
        "Bruno Tozetto",
        "Analista de Testes",
        "359.985.968-03",
        "1200000",
        "Masculino",
        "01/07/2012",
        "CLT"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Logar usuário",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@TesteCadastrarFuncionario"
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
  "name": "clico no botão Novo Funcionário",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.clico_no_botão_Novo_Funcionário()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a nome do funcionario \"Bruno Tozetto\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_a_nome_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o cargo do funcionario \"Analista de Testes\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_cargo_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o CPF do funcionario \"359.985.968-03\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_CPF_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o salário do funcionario \"1200000\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_salário_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o sexo do funcionario \"Masculino\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_sexo_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a admissão do funcionario \"01/07/2012\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_a_admissão_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a tipo de contratação do funcionario \"CLT\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_a_tipo_de_contratação_do_funcionario(String)"
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
  "name": "funcionario é cadastrado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.funcionario_é_cadastrado_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
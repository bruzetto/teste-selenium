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
});rgo",
        "salario",
        "sexo",
        "admissao",
        "tipoContratacao"
      ]
    },
    {
      "cells": [
        "Ana Rosseti",
        "Analista de Testes Senior",
        "1500000",
        "Feminino",
        "02/07/2012",
        "PJ"
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
  "name": "preencho a nome do funcionario \"Ana Rosseti\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_a_nome_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o cargo do funcionario \"Analista de Testes Senior\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_cargo_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o CPF do funcionario",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_CPF_do_funcionario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o salário do funcionario \"1500000\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_salário_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o sexo do funcionario \"Feminino\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_sexo_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a admissão do funcionario \"02/07/2012\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_a_admissão_do_funcionario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a tipo de contratação do funcionario \"PJ\"",
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
});: "java.lang.AssertionError: O Sistema está permitindo cadastro de CPF duplicado.\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat br.com.teste.selenium.stepdefinitions.CadastroFuncionarioStepDefinitions.funcionario_nao_pode_ser_duplicado(CadastroFuncionarioStepDefinitions.java:87)\r\n\tat ✽.funcionario não pode ser duplicado(file:src/test/resources/features/testar_cadastro_funcionario_duplicado.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});a_Inmetrics()"
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
  "name": "preencho a nome do funcionario \"Abner Tozetto\"",
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
  "name": "preencho o CPF do funcionario",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroFuncionarioStepDefinitions.preencho_o_CPF_do_funcionario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o salário do funcionario \"1500000\"",
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
  "name": "preencho a admissão do funcionario \"03/07/2012\"",
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
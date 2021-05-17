#language: pt
#encoding: UTF-8

@TesteExcluirFuncionario
Funcionalidade: Testar Excluir Funcionario

  Cenário: Exluir funcionario
    Dado que estou na Pagina de login da Inmetrics
    Quando preencho o usuario cadastrado
    Quando preencho a senha cadastrada
    Quando clico no botão Entre
    Quando clico no botão Excluir do funcionario cadastrado
    Entao funcionario é excluido com sucesso
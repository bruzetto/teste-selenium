#language: pt
#encoding: UTF-8

@TesteExcluirFuncionarioDuplicado
Funcionalidade: Testar Excluir Funcionario Duplicado

  Cenário: Exluir funcionario
    Dado que estou na Pagina de login da Inmetrics
    Quando preencho o usuario cadastrado
    Quando preencho a senha cadastrada
    Quando clico no botão Entre
    Quando removo funcionarios duplicados
    Entao funcionarios duplicados são excluidos com sucesso
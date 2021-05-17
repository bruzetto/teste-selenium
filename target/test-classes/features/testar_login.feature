#language: pt
#encoding: UTF-8

@TesteLogin
Funcionalidade: Testar Login

  Cenário: Logar usuário
    Dado que estou na Pagina de login da Inmetrics
    Quando preencho o usuario cadastrado
    Quando preencho a senha cadastrada
    Quando clico no botão Entre
    Entao login é efetuado com sucesso
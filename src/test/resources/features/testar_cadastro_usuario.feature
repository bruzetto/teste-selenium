#language: pt
#encoding: UTF-8

@TesteCadastro
Funcionalidade: Testar Cadastro usuario

  Esquema do Cenário: Cadastrar usuário
    Dado que estou na Pagina de login da Inmetrics
    Quando clico em Cadastre-se
    Quando preencho o usuario "<usuario>"
    Quando preencho a senha "<senha>"
    Quando confirmo a senha "<senha>"
    Quando clico no botão cadastrar
    Entao usuario é cadastrado com sucesso

    Exemplos:
      | usuario     | senha    |
      | brunotozett6| Teste12% |
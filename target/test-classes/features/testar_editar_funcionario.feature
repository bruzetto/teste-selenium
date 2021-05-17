#language: pt
#encoding: UTF-8

@TesteEditarFuncionario
Funcionalidade: Testar Editar Funcionario

  Esquema do Cenário: Editar funcionario
    Dado que estou na Pagina de login da Inmetrics
    Quando preencho o usuario cadastrado
    Quando preencho a senha cadastrada
    Quando clico no botão Entre
    Quando clico no botão Editar do funcionario cadastrado
    Quando edito o "<cargo>" do funcionaro
    Quando clico no botão Enviar
    Entao funcionario é atualizado com sucesso

    Exemplos:
      | cargo                     |
      | Analista de Testes Senior |
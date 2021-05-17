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
    Quando preencho a nome do funcionario "<nome>"
    Quando preencho o cargo do funcionario "<cargo>"
    Quando preencho o CPF do funcionario
    Quando preencho o salário do funcionario "<salario>"
    Quando preencho o sexo do funcionario "<sexo>"
    Quando preencho a admissão do funcionario "<admissao>"
    Quando preencho a tipo de contratação do funcionario "<tipoContratacao>"
    Quando clico no botão Enviar
    Entao funcionario é atualizado com sucesso

    Exemplos:
      | nome        | cargo                     | salario | sexo      | admissao   | tipoContratacao |
      | Ana Rosseti | Analista de Testes Senior | 1500000 | Feminino  | 02/07/2012 | PJ              |
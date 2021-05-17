#language: pt
#encoding: UTF-8

@TesteCadastrarFuncionarioDuplicado
Funcionalidade: Testar Cadastrar Funcionario Duplicado

  Esquema do Cenário: Cadastrar Funcionario Duplicado
    Dado que estou na Pagina de login da Inmetrics
    Quando preencho o usuario cadastrado
    Quando preencho a senha cadastrada
    Quando clico no botão Entre
    Quando clico no botão Novo Funcionário
    Quando preencho a nome do funcionario "<nome>"
    Quando preencho o cargo do funcionario "<cargo>"
    Quando preencho o CPF do funcionario cadastrado
    Quando preencho o salário do funcionario "<salario>"
    Quando preencho o sexo do funcionario "<sexo>"
    Quando preencho a admissão do funcionario "<admissao>"
    Quando preencho a tipo de contratação do funcionario "<tipoContratacao>"
    Quando clico no botão Enviar
    Entao funcionario não pode ser duplicado

    Exemplos:
      | nome          | cargo              | salario | sexo      | admissao   | tipoContratacao |
      | Artur Tozetto | Analista de Testes | 1200000 | Masculino | 01/07/2012 | CLT             |
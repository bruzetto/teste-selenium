package br.com.teste.selenium.suite;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import br.com.teste.selenium.runner.TestarCadastroRunner;
import br.com.teste.selenium.runner.TestarLoginRunner;
import br.com.teste.selenium.runner.TestarCadastroFuncionarioRunner;
import br.com.teste.selenium.runner.TestarCadastroFuncionarioDuplicadoRunner;
import br.com.teste.selenium.runner.TestarEditarFuncionarioRunner;
import br.com.teste.selenium.runner.TestarExcluirFuncionarioRunner;

@RunWith(Suite.class)

@Suite.SuiteClasses({
        TestarCadastroRunner.class,
        TestarLoginRunner.class,
        TestarCadastroFuncionarioRunner.class,
        TestarCadastroFuncionarioDuplicadoRunner.class,
        TestarEditarFuncionarioRunner.class,
        TestarExcluirFuncionarioRunner.class
})

public class TesteSuite {
}
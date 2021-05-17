package br.com.teste.selenium.suite;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import br.com.teste.selenium.runner.TestarCadastroRunner;
import br.com.teste.selenium.runner.TestarLoginRunner;
import br.com.teste.selenium.runner.TestarCadastroFuncionarioRunner;
import br.com.teste.selenium.runner.TestarEditarFuncionarioRunner;

@RunWith(Suite.class)

@Suite.SuiteClasses({
        TestarCadastroRunner.class,
        TestarLoginRunner.class,
        TestarCadastroFuncionarioRunner.class,
        TestarEditarFuncionarioRunner.class
})

public class TesteSuite {
}
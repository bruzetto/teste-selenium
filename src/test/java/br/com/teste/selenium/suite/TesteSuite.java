package br.com.teste.selenium.suite;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import br.com.teste.selenium.runner.TestarCadastroRunner;
import br.com.teste.selenium.runner.TestarLoginRunner;

@RunWith(Suite.class)

@Suite.SuiteClasses({
        TestarCadastroRunner.class,
        TestarLoginRunner.class
})

public class TesteSuite {
}
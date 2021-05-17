package br.com.teste.selenium.runner;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber-html-report", "json:target/cucumber.json", "junit:target/cucumber.xml" },
        features = "src/test/resources/features",
        tags = "@TesteCadastro",
        glue="br.com.teste.selenium.stepdefinitions",
        dryRun = false
)
public class TestarCadastroRunner {}
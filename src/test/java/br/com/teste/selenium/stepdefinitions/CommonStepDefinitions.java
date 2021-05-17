package br.com.teste.selenium.stepdefinitions;

import br.com.teste.selenium.utils.ManipuladorPropriedades;
import io.cucumber.java.Before;
import io.cucumber.java.After;

public class CommonStepDefinitions {

    @Before
    public void setUp() throws Exception {

        ManipuladorPropriedades.getProperties();
    }

    @After
    public void tearDown() throws Exception {

        ManipuladorPropriedades.setProperties();
    }
}
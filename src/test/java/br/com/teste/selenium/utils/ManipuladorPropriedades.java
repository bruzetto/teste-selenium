package br.com.teste.selenium.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Properties;

public class ManipuladorPropriedades {

    //region usuario

    private static String usuario = "";

    public static String getUsuario() {

        return usuario;
    }

    public static void setUsuario(String usuarioLogin) {

        if (usuarioLogin == null) {
            usuario = "";
        } else {
            usuario = usuarioLogin;
        }
    }

    //endregion

    //region senha

    private static String senha = "";

    public static String getSenha() {

        return senha;
    }

    public static void setSenha(String usuarioSenha) {

        if (usuarioSenha == null) {
            senha = "";
        } else {
            senha = usuarioSenha;
        }
    }

    //endregion

    //region cpf do funcionario

    private static String cpfFunc = "";

    public static String getCPFFunc() {

        return cpfFunc;
    }

    public static void setCPFFunc(String cpf) {

        if (cpf == null) {
            cpfFunc = "";
        } else {
            cpfFunc = cpf;
        }
    }

    //endregion

    public static void setProperties() throws IOException {

        Properties props = new Properties();

        OutputStream output_resources = new FileOutputStream("./src/test/resources/properties/dadosDoTeste.properties");

        props.setProperty("usuario.login", getUsuario());
        props.setProperty("senha.login", getSenha());
        props.setProperty("cpf.func", getCPFFunc());

        props.store(output_resources, "Dados da execução");
    }

    public static void getProperties() throws IOException {

        Properties props = new Properties();

        File folder_resources = new File("./src/test/resources/properties/");
        folder_resources.mkdir();

        folder_resources = new File("./src/test/resources/properties/dadosDoTeste.properties");
        folder_resources.createNewFile();

        InputStream input_resources = new FileInputStream("./src/test/resources/properties/dadosDoTeste.properties");
        props.load(input_resources);

        setUsuario(props.getProperty("usuario.login"));
        setSenha(props.getProperty("senha.login"));
        setCPFFunc(props.getProperty("cpf.func"));
    }
}
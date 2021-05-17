Testes Automatizados de Interface
Esse projeto foi gerado utilizando o modelo de design pattern page objects.

Pré Requisitos
Para que seja possível rodar esses testes é necessário atender alguns requisitos básicos.

Java 8+
Maven 3.3+

Compilando e inicializando
Assim como todo projeto Maven, é necessário primeiramente realizarmos a geração dos fontes. Conforme o exemplo abaixo:

mvn clean install
Certifique-se de o repositório do Maven está corretamente configurado. Após os fontes terem sido gerados, basta executar o comando abaixo para inicializar a aplicação:

Ao final da execução o relatório será gerado no caminho: ./target/site/serenity/index.html
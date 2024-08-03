# Documentação do Projeto
## 1. Padrões de Projeto Utilizados
 ## - Factory Method
    Descrição:
    O padrão Factory Method foi utilizado para criar objetos a partir de classes específicas, dependendo do tipo de arquivo que está sendo lido. No nosso caso, o JsonParserFactory foi implementado para retornar um parser adequado baseado no nome do arquivo. Isso permite que o sistema seja flexível e facilmente extensível para diferentes tipos de arquivos JSON no futuro.

 - Justificativa:
    O Factory Method facilita a extensão do sistema para novos formatos de arquivos sem modificar o código existente, cumprindo assim o princípio do Open/Closed Principle (OCP).

## - Adapter
    Descrição:
    O padrão Adapter foi utilizado para adaptar os dados das cidades lidas do arquivo JSON e formatá-los em um relatório HTML. O HtmlAdapter recebe uma lista de cidades e gera um conteúdo HTML formatado.
        
 - Justificativa:
    O Adapter permite que classes incompatíveis trabalhem juntas, convertendo a interface de uma classe em outra que o cliente espera. Ele facilita a reutilização do código de geração de relatórios com diferentes formatos de saída (por exemplo, HTML, TXT).

## - Observer
    Descrição:
    O padrão Observer foi utilizado para permitir que diferentes partes do sistema sejam notificadas quando um relatório é gerado. O ReportSubject é a classe que gera o relatório e notifica os observadores (como o LoggerObserver) sobre o novo relatório.

 - Justificativa:
    O Observer facilita a implementação de um sistema desacoplado, onde diferentes partes do código podem reagir a eventos (como a geração de um relatório) sem precisar estar diretamente conectadas. Isso cumpre o princípio do Single Responsibility Principle (SRP), permitindo que a responsabilidade de notificar observadores seja separada da lógica de geração de relatórios.

## 2. Refatorações Baseadas nos Princípios SOLID
  ## - 2.1 Single Responsibility Principle (SRP)
   Refatoração:
    Cada classe foi refatorada para ter uma única responsabilidade. Por exemplo, o HtmlAdapter é responsável apenas por converter dados em formato HTML, enquanto a classe ReportSubject se preocupa com a geração do relatório e notificação dos observadores.

 - Justificativa:
    Isso ajuda a manter o código organizado e fácil de manter, pois cada classe tem uma responsabilidade bem definida.

  ## - 2.2 Open/Closed Principle (OCP)
   Refatoração:
    O JsonParserFactory foi implementado para permitir a criação de diferentes parsers para diferentes tipos de arquivos sem modificar a estrutura existente. Para adicionar suporte a novos tipos de arquivos, basta criar um novo parser e registrá-lo na fábrica.

 - Justificativa:
    Isso garante que o código seja aberto para extensão, mas fechado para modificação, facilitando a adição de novas funcionalidades sem quebrar o código existente.

## - 2.3 Dependency Inversion Principle (DIP)
   Refatoração:
    As classes que utilizam os parsers e adapters não dependem de implementações concretas, mas sim de abstrações. Isso foi alcançado através do uso de interfaces e classes abstratas.

 - Justificativa:
    Isso facilita a substituição de implementações concretas sem alterar as classes que dependem delas, promovendo um design mais flexível e testável.

## 3. Explicação do Script de Teste
  ## - 3.1 Finalidade do Script de Teste
    O script de teste foi criado para validar se as funcionalidades principais do sistema estão funcionando conforme esperado. Ele verifica se:

        - O parser adequado é criado pelo JsonParserFactory.
        - O HtmlAdapter gera um relatório HTML com as cidades.
        - O padrão Observer notifica corretamente os observadores quando um relatório é gerado.

## 3.2 Como Executar os Testes
Para executar os testes, você precisa ter o **Node.js** instalado no seu ambiente. Em seguida, utilize o seguinte comando no terminal, a partir do diretório raiz do projeto: **npx jest**
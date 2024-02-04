# Backend

## Como resolvi a parte 1

Dividi a aplicação em algumas camadas:

<ul>
    <li>Controller: Responsável por receber as requisições do usuário. Ele valida os dados de entrada usando a biblioteca Zod, garantindo que os dados atendam aos critérios definidos.</li>
    <li>UseCase: É uma camada intermediária que contém a lógica de negócios da aplicação. O Controller chama o UseCase, passando os dados validados. Essa camada pode realizar transformações nos dados e orquestrar diversas operações antes de interagir com o banco de dados.</li>
    <li>Repository: É responsável pela comunicação direta com o banco de dados. O UseCase chama métodos do Repository para realizar operações de leitura ou escrita no banco de dados. Essa camada atua como uma ponte entre a lógica de negócios do UseCase e a persistência de dados.</li>
</ul>

Apliquei conceitos de inversão e injeção de dependencia buscando assim boas práticas de arquitetura, garantindo uma separação clara das responsabilidades entre as diferentes camadas da aplicação. Isso facilita a manutenção, testabilidade e escalabilidade.

## Como resolvi a parte 2

O problema proposto é baseado no problema do caixeiro viajante, que consiste em encontrar a rota mais curta que visita um conjunto de pontos (clientes) uma vez e retorna ao ponto de origem (empresa). Segue os passos que realizei:

<ol>
    <li>Busco as coordenadas dos clientes do banco de dados</li>
    <li>Inicializo uma lista de clientes visitados e um caminho vazio.</li>
    <li>Inicio no ponto de origem (0,0) e marco como visitado.</li>
    <li>Uso o algoritmo do vizinho mais próximo para encontrar o ponto mais próximo do ponto atual e o adiciona ao caminho.</li>
    <li>Repito o passo 4 até visitar todos os clientes.</li>
    <li>Retorno à empresa para fechar o ciclo.</li>
    <li>Reorganizo a lista de clientes com base no caminho calculado e retorno em formato JSON</li>
</ol>

Tambem realizei comentarios nos codigos, detalhando o passo a passo. o fluxo inicia em [FindBestRouteUseCase](https://github.com/mateusgiroletti/teste-facilita-juridico/blob/main/backend/src/app/useCases/FindBestRouteUseCase.ts)

## Como Usar?

Para utilizar o aplicativo é recomendado ter o docker instalado, portanto não é necessário instalar o banco de dados e outros utilitários encontrados no arquivo docker-compose.

Clone este projeto em seu diretório favorito e mude para o diretório backend:

```console
cd backend
```

Inicie os contêineres dockers.

```console
docker-compose up -d
```

Acesse a base dados e rode o script DDL que esta na raiz. scripts.sql
 
O aplicativo estava disponível em

```console
http://localhost:3000/
```
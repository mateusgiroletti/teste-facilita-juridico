# Backend

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
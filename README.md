
<p align= "center"><img src="https://imgur.com/6foNNzk.png"></p>

<h1 align="center"> +Monitoria </h1>
<p align="center"> Uma aplicação para integrar alunos que desejam aprender, e os que desejam ensinar.</p>

<p align="center">
  <a href="https://fga-eps-mds.github.io/2019.1-MaisMonitoria/">Acesse o site de apresentação do +Monitoria</a>
</p>

## Contexto
Nesse repositório está localizado o código do front end do projeto. Onde é feito a interface do usuário e realiza requisições através do API gateway.

## Requisitos
Requisitos para conseguir rodar o projeto.
 - Docker
 - Docker-compose
## Desenvolvimento
1. Dê um fork do projeto
2. No [repositório de docs](https://github.com/fga-eps-mds/2019.1-MaisMonitoria) crie uma issue de acordo com  [plano de gestão e configuração](https://fga-eps-mds.github.io/2019.1-MaisMonitoria/docs/plano-gcs) 
3. Para iniciar o desenvolvimento clone o repositório.
4. Faça a build do projeto 
> sudo make build
5. Dê o run no projeto
> sudo make run
6. Acesse http://localhost:3000

### Comandos Makefile

1. Para rodar em background
> sudo make run-d
2. Para rodar os testes
> sudo make test 
3. Para rodar os testes e visualizar a cobertura
> sudo make test-coverage
4. Para entrar no container
> sudo make enter
5. Para derrubar o container
> sudo make down
6. Para parar o container
> sudo make stop
7. Para iniciar o container
> sudo make start


## Outros repositorios
* [+Monitoria DOCS](https://github.com/fga-eps-mds/2019.1-MaisMonitoria)
* [+Monitoria API Monitorias](https://github.com/fga-eps-mds/2019.1-MaisMonitoria-ApiMonitorias)
* [+Monitoria API Gateway](https://github.com/fga-eps-mds/2019.1-MaisMonitoria-api)


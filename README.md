<img src="https://github.com/LeandroKrygoskii/Sos4patas/blob/main/sos4patas/sos4patasimg.png" alt="projeto imagem">

> Projeto sendo desenvolvido para uma ong da minha cidade. Que cuida de adoções, tratamento e denúncias de animais em estado de abandono.
### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Página de Denúncias
- [x] Envio de Email pelo Servidor
- [x] DashBoard(adm)
- [ ] Manipular Denúncias(adm)
- [ ] Design Responsivo

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Tenha instalado o Yarn em seu computador
* Tenha instalado o NodeJs na versão >= 12.0.

## ***</>*** Como usar o código?
1. Instale o **Yarn** em seu computador
1. Instale o **NodeJs** na versão >= 12.0
1. Clone este repositório `https://github.com/LeandroKrygoskii/Sos4patas.git`

### ⚙️ Backend
1. Acesse a pasta *backend* e dê o comando `yarn`
1. Acesse novamente a pasta *backend* e dê o comando `yarn dev`
1. Se tudo ocorreu bem o servidor estará rodando em `http://localhost:3333`

```
 ###☕ Rotas (BackEnd) ###
 1. /create_user - adm (POST)
 2. /auth - autentificação (GET)
 3. /create_adoption - cria uma nova adoção (POST)
 4. /adoption - lista todas as adoçoes cadastradas (GET)
 5. /adoption/:id - list a adoção pelo id (GET)
 6. /adoption/:id - Deleta a adoção pelo id (DELETE)
 7. /denuncias - Cadastra uma nova denúncia (POST)
 8. /denuncias - lista as denúncias Cadastradas (GET)
 
```

### 🌐 Web
1. Acesse o diretório e dê o comando `yarn`
1. Acesse a pasta *web* e dê o comando `yarn start`
1. Acesse em seu navegador a seguinte url `http://localhost:3000`



## 🤝 Exemplo de Uso
1.Para começar Crie uma conta "/create_user" (você pode usar ferramentas como o insomnia para isso).<br>
2.Acesse `http://localhost:3000/dashboard` e faça login.<br>
3.Cadastre novas adoções.


## 📫 Contribuindo para sos4patas
Para contribuir com sos4patas, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).




[⬆ Voltar ao topo](#Sos4patas)<br>

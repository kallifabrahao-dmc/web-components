# Vue web components

---

### Tópicos

1. Vantagens do vue.
2. Documentação do usuário/do projeto
3. Estrutura do projeto
4. Estrutura de testes
5. Padronização das tags
6. Verdaccio

---

## 1. Vantagens do vue

1. A equipe já está familiarizada com Vue, o que reduz o tempo de aprendizado necessário para criar Web Components.

2. Como a equipe já usa Vue, a manutenção e evolução dos Web Components criados são mais fáceis, alinhadas com os padrões existentes da equipe.

3. Web Components podem ser usados em qualquer aplicação, independentemente do framework (React, Angular, Vanilla JS).

4. Web Components criados com Vue 3 suportam Shadow DOM, garantindo encapsulamento de estilos e evitando conflitos com o CSS global da aplicação.

5. Além da possibilidade de criarmos uma interface de documentação no mesmo repositório do projeto

---

## 2. Estrutura do projeto

```markdown
🌲 **src/**

- 📁 **components/**
  - 📁 **molecules/**
    - 📁 **menuSidebar/**
      - 📄 **menuSidebar.vue** → UI
      - 📄 **useMenuSidebar.ts** → Composable
      - 📄 **interface.ts** → Tipagem
      - 📄 **menuSidebar.test.ts** → Testes
      - 📄 **menuSidebar.feature** → Script de teste
```

Vantagens: <br>

1. Ao dividir o projeto em UI, Lógica e Testes, garantimos que cada parte do código tenha uma responsabilidade bem definida. Isso torna o código mais fácil de entender, modificar e estender.

2. A estrutura modular e a separação de responsabilidades permitem que o projeto cresça sem se tornar desorganizado.

3. Os Composables ajudam a manter a lógica desacoplada, permitindo que ela seja reutilizada em diferentes partes da aplicação.

4. Com a lógica isolada nos Composables e a UI separada em seus próprios arquivos .vue, tanto a lógica quanto a interface podem ser testadas de forma isolada, garantindo maior cobertura e robustez do código.

5. Componentes e lógicas reutilizáveis ajudam a reduzir a redundância no código, resultando em uma aplicação mais leve e com melhor desempenho.

## 3. Estrutura de testes com BDD

1. <strong>Inicio da sprint:</strong> Com os cards em mãos, os devs e o QA se unem em um war room para analisar e descrever todos os cenários possiveis para as tarefas <br>

   <strong>Ação: Analizar DOD, figma e contrato com o back</strong>
   <br>
   <br>

2. <strong>Desenvolvimento:</strong> Nessa etapa o dev começa a desenvolver, podendo remover, alterar ou adicionar novos cenários.
   <br>

   <strong>Todos os cenários previamente descritos devem ser contemplado no desenvolvimento e garantidos através dos testes automatizados.
   </strong>
   <br>
   <br>

3. <strong>Code Review:</strong> Agora a revisão passa a ser guiada, tanto pelo script de teste, quanto pela doc do projeto onde os padrões de qualidade e desenvolvimento foram definidos. <br>

   <strong>
   O dev na revisão deverá avaliar se os cenarios foram contemplatos e se a implementação segue dentro dos padrões definidos e das boas práticas.
   </strong>
   <br>
   <br>

4. <strong>teste QA:</strong> O QA poderá dividir os testes em duas etapas, na primeira validar que a implementação contempla cada cenario descrito e na segunda, buscar por detalhes que possam ter ficado fora do radar.
   <br>

   <strong>
   Nessa etapa ao constar um novo cenário ou falha, o QA deverá retornar ao front para eventual correção e aguardar para o reteste.
   </strong>
   <br>
   <br>

<strong>Vantagens:</strong>

- Todas as etapas serão guiadas, seguindo uma estrutura previamente definida.
- Todos os envolvidos passam a entender não somente a sua tarefa, mas a do colega também.
- Seremos mais eficientes e acertivos no code review
- Teremos mais acertivida no desenolvimento, nos testes automazados e nos testes com o QA.

## 4. Padronização das tags

A padronização das tags de web components é essencial para garantir praticidade, organização e manutenção do código.

```markdown
<ce-menu-sidebar></ce-menu-sidebar>
```

## 5. Verdaccio

Verdaccio é um registro de pacotes npm de código aberto e autogerenciado. Ele permite criar um registro privado para hospedar pacotes de forma segura e eficiente, sem depender diretamente de repositórios públicos como o npmjs.com.

```markdown
npm install -g verdaccio
verdaccio
npm set @comerc-hmg:registry http://localhost:4873
npm publish
```

- Autenticação: Adicione autenticação para proteger pacotes. O arquivo de configuração do Verdaccio `(~/.config/verdaccio/config.yaml)` permite configurar usuários e permissões.

- Docker: Verdaccio também pode ser executado via Docker. Para isso, use o comando:

```markdown
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

- Integração CI/CD: Utilize Verdaccio para gerenciar pacotes em pipelines CI/CD, garantindo que dependências privadas estejam disponíveis de forma segura.

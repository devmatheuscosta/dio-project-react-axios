# React com axios

Este projeto é uma aplicação React que permite buscar repositórios no GitHub e exibir informações sobre eles. A aplicação utiliza a biblioteca `axios` para fazer requisições à API do GitHub e `styled-components` para estilização.

## Estrutura do Projeto

- `src/pages/App.js`: Componente principal da aplicação.
- `src/components/Input`: Componente para inserir o nome do repositório.
- `src/components/Button`: Componente de botão para acionar a busca.
- `src/components/ItemRepo`: Componente para exibir informações do repositório.
- `src/services/api.js`: Configuração do axios para fazer requisições à API do GitHub.
- `src/styles.js`: Estilos globais utilizando `styled-components`.

## Tecnologias Utilizadas

- React
- Axios
- Styled-components

## Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/devmatheuscosta/dio-project-react-axios
```

2. Navegue até o diretório do projeto:

```bash
cd dio-project-react-axios
```

3. Instale as dependências:

```bash
 npm install
```

4. Execute a aplicação:

```bash
npm start
```

A aplicação será aberta em seu navegador padrão no endereço `http://localhost:3000`.

## Funcionalidades

- **Busca de Repositórios**: Permite buscar repositórios no GitHub pelo nome.
- **Exibição de Repositórios**: Exibe uma lista dos repositórios encontrados com informações detalhadas.
- **Remoção de Repositórios**: Permite remover um repositório da lista exibida.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/teteu/.vscode/extensions/codeium.codeium-1.16.18/dist/LICENSE) para mais detalhes.

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma pull request ou relatar um problema.

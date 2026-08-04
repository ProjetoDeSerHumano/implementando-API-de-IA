## Implementação de API de IA com Node.js

Um projeto prático desenvolvido para entender e aplicar a integração de modelos de Inteligência Artificial em uma aplicação web. 

Este repositório nasceu do meu objetivo de desmistificar o consumo de APIs externas e o gerenciamento de rotas no back-end, conectando uma interface limpa com a inteligência do modelo GPT da OpenAI.

## Funcionalidades
- Recebe perguntas e prompts de usuários através de uma interface web.
- Comunica-se de forma assíncrona (via back-end) com a API da OpenAI.
- Renderiza a resposta formatada diretamente na tela do usuário, mantendo o contexto da pergunta.

## Tecnologias e Ferramentas
- **Node.js & Express:** Estruturação do servidor e gerenciamento das rotas HTTP (GET/POST).
- **Nunjucks:** Motor de templates (Template Engine) para renderização do HTML no lado do servidor (SSR).
- **OpenAI SDK:** Biblioteca oficial para consumo da API do ChatGPT.
- **Dotenv:** Gerenciamento seguro de variáveis de ambiente (proteção de chaves de acesso).
- **HTML5 & CSS3:** Construção e estilização da interface.

## Aprendizados e Arquitetura
Embora seja um projeto de escopo focado e inicial, construí-lo me permitiu consolidar conceitos fundamentais no desenvolvimento de software:
* **Comunicação Cliente-Servidor:** Entendimento prático de como o corpo de uma requisição (`req.body`) viaja do formulário front-end até a rota no back-end.
* **Assincronismo:** Utilização estruturada de `async/await` e blocos `try/catch` para lidar com a latência de serviços externos e prevenir que o servidor quebre em caso de erros de rede.
* **Segurança e Boas Práticas:** Blindagem de credenciais sensíveis garantindo que o arquivo `.env` não seja rastreado pelo controle de versão (`.gitignore`).
* **Separação de Responsabilidades:** Organização clara entre a lógica do servidor (`server.js`), os arquivos visuais (`/views`) e os recursos estáticos (`/css`).

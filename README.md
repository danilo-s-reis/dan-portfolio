
# 📄 Portfolio Danilo Reis

Este é o repositório do meu site de portfólio pessoal, desenvolvido para apresentar minhas habilidades e projetos.

---

### 🛠️ Tecnologias Usadas

-   **React:** Para a construção da interface de usuário de forma declarativa e baseada em componentes.
-   **TypeScript:** Para adicionar tipagem estática ao JavaScript, garantindo um código mais robusto e de fácil manutenção.
-   **Tailwind CSS:** Um framework CSS *utility-first* para estilização rápida e customizável diretamente no HTML/JSX.
-   **ESM (ECMAScript Modules):** Os módulos (React, ReactDOM) são carregados diretamente no navegador através da CDN `esm.sh`, eliminando a necessidade de `npm install` ou `webpack`/`vite` para o desenvolvimento.
-   **Vercel:** Deploy e CI/CD.

---

### 🗺️ Seções da Página

A página é uma *Single Page Application* (SPA) dividida nas seguintes seções:

1.  **Introdução:** Uma breve apresentação com meu nome, título, um resumo conciso e links para minhas redes sociais profissionais (LinkedIn, GitHub) e e-mail.
2.  **Tecnologias:** Uma lista visual das tecnologias, linguagens e ferramentas com as quais tenho experiência.
3.  **Sobre Mim:** Uma descrição mais detalhada da minha jornada profissional, minha filosofia de trabalho e meus principais interesses.
4.  **Meus Projetos:** Uma galeria com os projetos mais relevantes que desenvolvi, cada um apresentado em um card com descrição, tecnologias utilizadas e um link direto para o repositório no GitHub.
5.  **Rodapé:** Informações de copyright e de contato.

---

### 🚀 Como Rodar o Projeto Localmente

Como este projeto não utiliza um empacotador como Vite ou Webpack, ele precisa ser servido por um servidor web local para que os módulos ES funcionem corretamente.

#### Pré-requisitos
-   Um navegador web moderno (Chrome, Firefox, Edge, etc.).
-   Opcional: [VS Code](https://code.visualstudio.com/) com a extensão **Live Server**, [Python](https://www.python.org/) ou [Node.js](https://nodejs.org/) instalado.

#### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/danilo-s-reis/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Inicie um servidor local (escolha uma das opções):**

    *   **Opção 1: VS Code (Recomendado)**
        1.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
        2.  Clique com o botão direito no arquivo `index.html`.
        3.  Selecione "Open with Live Server".

    *   **Opção 2: Python**
        ```bash
        # Para Python 3
        python -m http.server
        ```
        Acesse `http://localhost:8000` no seu navegador.

    *   **Opção 3: Node.js (com o pacote `serve`)**
        ```bash
        # Instale o serve globalmente (apenas uma vez)
        npm install -g serve
        # Inicie o servidor
        serve
        ```
        Acesse o endereço fornecido no terminal (geralmente `http://localhost:3000`).

---

### 📁 Estrutura do Projeto

A estrutura de arquivos é organizada para manter uma clara separação de responsabilidades.

```
.
├── components/
│   ├── AboutMeContent.tsx  # Componente com o texto da seção "Sobre Mim".
│   ├── Icons.tsx           # Componentes SVG para os ícones.
│   └── ProjectCard.tsx     # Componente para exibir um card de projeto.
├── App.tsx                 # Componente principal que organiza todas as seções.
├── constants.ts            # Armazena dados estáticos (informações pessoais, projetos).
├── favicon.png             # Ícone da aba do navegador.
├── index.html              # Ponto de entrada da aplicação.
├── index.tsx               # Arquivo que renderiza o App React na DOM.
├── metadata.json           # Metadados da aplicação.
├── profile-photo.jpg       # Foto de perfil.
├── README.md               # Este arquivo.
└── types.ts                # Definições de tipos do TypeScript.
```

---

### 📫 Contato

Vamos nos conectar!

-   **LinkedIn:** [danilo-souza-reis](https://www.linkedin.com/in/danilo-souza-reis-ab61761b6/)
-   **GitHub:** [@danilo-s-reis](https://github.com/danilo-s-reis)
-   **Email:** [reis.souza.danilo@hotmail.com](mailto:reis.souza.danilo@hotmail.com)

---

### 🌐 Live Demo

Você pode ver a versão ao vivo do projeto aqui:

[**[Link para deploy]**](https://danilo-reis.vercel.app/)


# Tech Store E-commerce - Projeto Final de Desenvolvimento Web

Projeto acadêmico de desenvolvimento front-end para a disciplina de **Desenvolvimento Web**. O projeto consiste na criação da **Tech Store**, um e-commerce moderno e responsivo especializado na venda de eletrônicos, periféricos de alta performance e componentes de hardware, construído com HTML5 semântico, CSS3 e JavaScript puro.

---

## 👥 Equipe do Projeto

- **CARLOS EDUARDO CRISTOVÃO DE MELO**
- **ANTONIA BRUNA SILVA DOS SANTOS**
- **FRANCISCO NUNES LOPES DA SILVA**
- **RODRIGO PEREIRA OLIVEIRA**

---

## 🌐 Publicação e Links do Projeto

- 🔗 **GitHub Pages (Aplicação Online):** [https://carloseduardo-melo.github.io/TechStore-Ecommerce/](https://carloseduardo-melo.github.io/TechStore-Ecommerce/)
- 📁 **Repositório GitHub:** [https://github.com/carloseduardo-melo/TechStore-Ecommerce](https://github.com/carloseduardo-melo/TechStore-Ecommerce)

---

## 📋 Proposta Geral do Projeto Web

* **Nome do Projeto:** Tech Store E-commerce
* **Objetivo do Projeto:** Desenvolver uma plataforma e-commerce interativa e responsiva para apresentar produtos de tecnologia, permitir a navegação por categorias, gerenciar um carrinho de compras em tempo real, responder dúvidas frequentes e oferecer formulários funcionais de atendimento e checkout com validação de dados client-side.
* **Justificativa:** O mercado de tecnologia demanda soluções web modernas com alta usabilidade, interface responsiva para dispositivos móveis e feedback em tempo real para os usuários, sem depender do recarregamento de página.
* **Motivações para a Escolha do Tema:** A escolha de um e-commerce de eletrônicos/hardware permite demonstrar uma ampla variedade de conceitos de desenvolvimento web, incluindo estruturação semântica de cards de produtos, galerias de imagens, filtros dinâmicos, cálculo de frete, componentes colapsáveis (accordion) e formulários com validação inline.
* **Público-Alvo:** Entusiastas de tecnologia, gamers, estudantes, profissionais de TI e consumidores em geral que buscam adquirir componentes de hardware e periféricos online com facilidade e segurança.
* **Visão Geral do Sistema Web:** Interface web modular composta por 5 páginas integradas, com alternador de tema claro/escuro (Dark/Light mode), menu responsivo, carrinho dinâmico com persistência de dados e formulários de suporte e compra com validação nativa e via JavaScript.
* **Descrição das Páginas e Funcionalidades:**
  * `index.html` (Página Inicial): Apresentação da loja, banner principal hero, categorias, produtos em destaque, seção de FAQ interativo em accordion e formulário de contato/suporte.
  * `paginas/catalogo-produtos.html`: Catálogo completo de produtos com busca dinâmica por palavra-chave e filtros por categoria (Hardware, Periféricos, Monitores).
  * `paginas/detalhes-produto.html`: Detalhes técnicos do produto selecionado, galeria visual e botão de adição direta ao carrinho.
  * `paginas/carrinho.html`: Listagem interativa de produtos adicionados, ajuste de quantidade, cálculo automático de subtotal/total, frete grátis (acima de R$ 500,00) e remoção de itens.
  * `paginas/checkout.html`: Formulário de finalização da compra com validação de dados cadastrais, endereço (máscara de CEP) e pagamento (máscara de CPF), com mensagem de confirmação de pedido.

---

## 🛠️ Evolução do Projeto - O que foi adicionado em cada Etapa

### 🔹 Etapa 1 [PF1] - Estrutura Inicial do Projeto Web
Nesta primeira fase do projeto, o objetivo principal foi organizar a estrutura de arquivos e desenvolver o esqueleto funcional da interface utilizando HTML5 semântico.

#### O que foi adicionado na Etapa 1:
1. **Estrutura de Pastas e Arquivos Organizada:**
   * Nomes em letras minúsculas, sem espaços ou acentos, utilizando hífen (`css/`, `js/`, `img/`, `paginas/`).
   * Criação do arquivo principal `index.html` na raiz do projeto.
   * Criação dos arquivos base `css/style.css` e `js/script.js`.
2. **Uso Rigoroso de Tags Semânticas HTML5:**
   * `<header>` para o cabeçalho principal da aplicação.
   * `<nav>` para a barra de navegação global.
   * `<main>` para delimitar a área de conteúdo primária.
   * `<section>` para organizar os blocos temáticos (Banner Destaque, Categorias, Produtos, FAQ e Atendimento).
   * `<article>` para a representação semântica dos cards de produtos.
   * `<aside>` para informações complementares (dica de frete grátis).
   * `<footer>` para o rodapé da página com direitos autorais e dados da equipe.
3. **Hierarquia de Títulos e Conteúdo Inicial:**
   * Organização sequencial dos níveis de título (`<h1>`, `<h2>`, `<h3>`).
   * Adição de links funcionais no menu de navegação utilizando caminhos relativos.
   * Inclusão de imagens provisórias e definitivas na pasta `img/`.

---

### 🔹 Etapa 2 [PF2] - Layout Responsivo e Adaptação para Telas
Na segunda fase, a interface foi adaptada para garantir uma visualização adequada em celulares, tablets e computadores, aplicando técnicas modernas de CSS responsivo.

#### O que foi adicionado na Etapa 2:
1. **Meta Tag Viewport:**
   * Adição da configuração `<meta name="viewport" content="width=device-width, initial-scale=1.0">` em todas as páginas para correto dimensionamento em dispositivos móveis.
2. **Imagens Responsivas:**
   * Aplicação da regra `max-width: 100%` e `height: auto` em todas as imagens do sistema, garantindo ajuste fluido aos contêineres pai.
3. **Layout Flexível com CSS Flexbox e Grid:**
   * Reorganização dos cards de produtos e das seções em grades responsivas que se ajustam automaticamente à largura da tela.
   * Prevenção de rolagem horizontal indesejada (`overflow-x: hidden`).
4. **Media Queries CSS (`@media`):**
   * Implementação de breakpoints para telas menores (smartphones até 768px e tablets até 1024px).
   * Reorganização do menu de navegação `<nav>` para disposição empilhada (coluna) em telas mobile.
   * Ajuste de tipografia, margens e espaçamentos (padding/margin) para preservar a legibilidade dos textos em celulares.

---

### 🔹 Etapa 3 [PF3] - Formulários Funcionais e Interatividade com JavaScript (Entrega Final)
Na etapa final do projeto, foram adicionados formulários interativos com validação dinamizada via JavaScript puro e diversas interações avançadas de usuário.

#### O que foi adicionado na Etapa 3:
1. **Formulário Funcional de Atendimento e Suporte (`index.html`):**
   * **Estrutura com mais de 3 campos obrigatórios:** Nome Completo (texto), E-mail (e-mail), Assunto (`<select>`) e Mensagem (`<textarea>`).
   * **Associação com `<label>`:** Todos os campos possuem rótulos explicitamente ligados via atributo `for`.
   * **Validação Client-Side com JavaScript:** Verificação de preenchimento dos campos e formato correto do e-mail sem recarregar a página.
   * **Feedback Visual Amigável:** Exibição de mensagens de erro estilizadas em vermelho abaixo de cada campo inválido e banner visual de confirmação de envio sem popups nativos (`window.alert`).
2. **Formulário de Checkout e Finalização de Compra (`checkout.html`):**
   * Validação de campos de dados pessoais, entrega e dados de pagamento.
   * Auto-máscaras dinâmicas aplicadas em tempo real aos campos de CPF (`000.000.000-00`) e CEP (`00000-000`).
3. **Interações Avançadas em JavaScript (`js/script.js`):**
   * 🌓 **Alternador de Tema Claro/Escuro (Dark/Light Mode):** Botão de alternância com ícones visuais no menu de navegação e salvamento da preferência no `localStorage`.
   * 🛒 **Badge Contador do Carrinho:** Indicador numérico dinâmico no menu header atualizado instantaneamente ao adicionar/remover produtos.
   * ❓ **FAQ Accordion Interativo:** Expandir/recolher dinâmico das respostas de dúvidas frequentes na página inicial.
   * 🔍 **Filtros e Busca em Tempo Real:** Filtragem dinâmica de produtos no catálogo por categoria e palavra-chave.
   * 💰 **Gerenciamento do Carrinho:** Ajuste de quantidades, exclusão de itens, cálculo de subtotal e regra automatizada de frete grátis acima de R$ 500,00.
4. **Revisão Geral e Polimento Final:**
   * Garantia de links e imagens funcionais em todas as páginas.
   * Código HTML/CSS/JS padronizado, limpo e indentado.
   * Acessibilidade aprimorada com atributos ARIA (`aria-expanded`, `aria-label`).

---

## 📂 Estrutura Completa de Pastas e Arquivos

```text
TechStore-Ecommerce/
├── index.html                   # Página inicial (Banner, Categorias, Destaques, FAQ e Contato)
├── README.md                    # Documentação oficial e histórico das etapas [PF1, PF2, PF3]
├── css/
│   └── style.css                # Design system, variáveis CSS, temas claro/escuro e responsividade
├── js/
│   └── script.js                # Manipulação do DOM, validações, formulários, carrinho, tema e FAQ
├── paginas/
│   ├── catalogo-produtos.html   # Catálogo completo com filtros por categoria e busca
│   ├── detalhes-produto.html    # Página de detalhes, especificações e mídias do produto
│   ├── carrinho.html            # Gerenciamento de itens do carrinho e resumo financeiro
│   └── checkout.html            # Formulário de finalização da compra com máscaras de CPF/CEP
└── img/                         # Imagens promocionais e ilustrações dos produtos
```

---

## 💻 Como Executar o Projeto Localmente

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/carloseduardo-melo/TechStore-Ecommerce.git
   ```
2. **Acessar a Pasta do Projeto:**
   ```bash
   cd TechStore-Ecommerce
   ```
3. **Executar no Navegador:**
   * Abra o arquivo `index.html` diretamente em seu navegador web (Google Chrome, Firefox, Edge, Safari) ou utilize uma extensão como Live Server no VS Code.

---

© 2026 **Tech Store E-commerce** - Todos os direitos reservados.

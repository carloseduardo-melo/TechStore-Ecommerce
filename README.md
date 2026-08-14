# Tech Store E-commerce - Entrega Final do Projeto Web

Projeto acadêmico de desenvolvimento front-end para a disciplina de Desenvolvimento Web. A plataforma consiste no desenvolvimento da **Tech Store**, um e-commerce completo e responsivo especializado na venda de eletrônicos, periféricos de alta performance e componentes de hardware, utilizando dados dinâmicos simulados em JavaScript.

---

## 👥 Equipe do Projeto

- **CARLOS EDUARDO CRISTOVÃO DE MELO**
- **ANTONIA BRUNA SILVA DOS SANTOS**
- **FRANCISCO NUNES LOPES DA SILVA**
- **RODRIGO PEREIRA OLIVEIRA**

---

## 🚀 Publicação no GitHub Pages

O projeto pode ser acessado publicamente no endereço:

👉 **[https://carloseduardo-melo.github.io/TechStore-Ecommerce/](https://carloseduardo-melo.github.io/TechStore-Ecommerce/)**

---

## 📌 Sobre a Entrega Final

Nesta etapa final, o projeto foi totalmente concluído, revisado e aprimorado com formulários funcionais, validações dinâmicas em JavaScript, mensagens de feedback visual e recursos de interatividade adicionais.

### 🌟 O que foi implementado e entregue:

#### 1. Formulários Funcionais & Validações em JavaScript
* **Formulário de Atendimento / Suporte ao Cliente (`index.html`)**:
  * Campos: Nome Completo (texto), E-mail (e-mail), Assunto (seleção `<select>`) e Mensagem (área de texto `<textarea>`).
  * Todos os campos possuem rótulos `<label>` devidamente associados.
  * Validação inline em tempo real via JavaScript: exibe mensagens estilizadas de erro abaixo de cada campo inválido.
  * Banner visual de confirmação de envio sem uso de popups nativos (`window.alert`).
* **Formulário de Checkout (`checkout.html`)**:
  * Validação de campos de dados pessoais, endereço e pagamento.
  * Auto-máscara dinâmica para CPF (`000.000.000-00`) e CEP (`00000-000`).
  * Verificação e bloqueio caso o carrinho esteja vazio com mensagem de instrução.

#### 2. Interações Adicionais em JavaScript
* **Alternador de Tema Claro / Escuro (Dark/Light Mode)**:
  * Botão de alternância no menu de navegação em todas as páginas com ícones e persistência no `localStorage`.
* **Badge Contador de Itens no Carrinho**:
  * Indicador numérico dinâmico no link "Meu Carrinho" da barra de navegação, atualizado instantaneamente ao adicionar/remover produtos.
* **Perguntas Frequentes Interativas (FAQ Accordion)**:
  * Seção sanfonada em `index.html` com alternância de expansão e recolhimento de respostas via JavaScript.
* **Filtros e Busca em Tempo Real**:
  * Filtro por categoria (Hardware, Monitores, Periféricos) e campo de busca por palavra-chave na página de catálogo.
* **Gerenciamento do Carrinho de Compras**:
  * Alteração de quantidades de produtos, cálculo automático de subtotal, regra de frete grátis (acima de R$ 500) e limpeza de carrinho.

#### 3. Qualidade Visual, Responsividade e Acessibilidade
* **Estrutura HTML5 Semântica**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` e `<footer>`.
* **Design System CSS**: Variáveis CSS, glassmorphism (`backdrop-filter`), animações fluidas (`@keyframes`) e tipografia moderna (`Space Grotesk` e `Manrope`).
* **Design Responsivo**: Adaptado para mobile, tablet e desktop sem rolagem horizontal indesejada (`overflow-x`).
* **Acessibilidade**: Atributos `aria-current="page"`, `aria-expanded`, `aria-label`, `loading="lazy"` e suporte a `@media (prefers-reduced-motion: reduce)`.

---

## 📁 Estrutura de Pastas e Arquivos

```text
TechStore-Ecommerce/
├── index.html                   # Página inicial (Banner, Categorias, Destaques, FAQ e Contato)
├── README.md                    # Documentação oficial do projeto
├── css/
│   └── style.css                # Estilos globais, tema claro/escuro, responsividade e componentes
├── js/
│   └── script.js                # Lógica centralizada, validações, tema, carrinho e FAQ
├── paginas/
│   ├── catalogo-produtos.html   # Catálogo completo com busca e filtros
│   ├── detalhes-produto.html    # Galeria e especificações do produto
│   ├── carrinho.html            # Gerenciamento de itens e resumo de valores
│   └── checkout.html            # Formulário de endereço, pagamento e finalização
└── img/                         # Imagens promocionais e mídias
```
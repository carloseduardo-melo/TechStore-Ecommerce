

const TECH_STORE_PRODUCTS = {
    'teclado-rgb': {
        id: 'teclado-rgb',
        name: 'Teclado Mecânico RGB',
        category: 'Periféricos',
        price: 350,
        shortDescription: 'Switches red, design ergonômico e iluminação personalizável.',
        longDescription:
            'O Teclado Mecânico RGB Tech Store Pro foi projetado para garantir máxima performance e durabilidade para jogos e produtividade. O layout ABNT2 e a construção em alumínio entregam precisão e firmeza no uso diário.',
        image: 'img/teclado-placeholder.jpg',
        alt: 'Teclado mecânico RGB Tech Store Pro',
        specs: [
            'Marca: Tech Store Components',
            'Tipo de switch: Mecânico Linear (Red)',
            'Layout: ABNT2',
            'Conectividade: Cabo USB-C removível de 1.8 metros',
            'Iluminação: RGB Chroma com 16.8 milhões de cores',
        ],
        featured: true,
    },
    'monitor-144hz': {
        id: 'monitor-144hz',
        name: 'Monitor Gamer 144Hz 24"',
        category: 'Monitores',
        price: 1200,
        shortDescription: 'Tempo de resposta de 1ms, painel IPS e AMD FreeSync.',
        longDescription:
            'Monitor gamer pensado para respostas rápidas, cores consistentes e maior fluidez em jogos competitivos. O painel IPS entrega ângulos amplos e fidelidade de cor para consumo e criação.',
        image: 'img/monitor-placeholder.jpg',
        alt: 'Monitor gamer 144Hz de 24 polegadas',
        specs: [
            'Tamanho: 24 polegadas',
            'Taxa de atualização: 144Hz',
            'Tempo de resposta: 1ms',
            'Painel: IPS',
            'Tecnologia: AMD FreeSync',
        ],
        featured: true,
    },
    'rtx-4060': {
        id: 'rtx-4060',
        name: 'Placa de Vídeo RTX 4060',
        category: 'Hardware',
        price: 2500,
        shortDescription: 'O melhor custo-benefício para rodar tudo no Ultra.',
        longDescription:
            'Uma GPU moderna para quem quer desempenho em jogos, criação de conteúdo e aceleração em tarefas gráficas com excelente eficiência energética.',
        image: 'img/monitor-placeholder.jpg',
        alt: 'Placa de vídeo RTX 4060 em destaque',
        specs: [
            'Memória: 8 GB GDDR6',
            'Arquitetura: NVIDIA Ada Lovelace',
            'Suporte a Ray Tracing',
            'DLSS: Sim',
            'Categoria: Hardware',
        ],
        featured: false,
    },
    'headset-71': {
        id: 'headset-71',
        name: 'Headset Gamer 7.1',
        category: 'Periféricos',
        price: 450,
        shortDescription: 'Áudio imersivo para jogos competitivos.',
        longDescription:
            'Headset com som envolvente, microfone ajustável e estrutura leve para longas sessões de uso. Ideal para jogos, chamadas e streaming.',
        image: 'img/teclado-placeholder.jpg',
        alt: 'Headset gamer 7.1 com microfone',
        specs: [
            'Som: Surround 7.1 virtual',
            'Microfone: Ajustável e com cancelamento de ruído',
            'Conexão: USB',
            'Conforto: Almofadas acolchoadas',
            'Categoria: Periféricos',
        ],
        featured: false,
    },
};

const CART_STORAGE_KEY = 'techstore_carrinho';
const LEGACY_CART_STORAGE_KEY = 'techstore-cart';
const DEFAULT_CART = [
    { id: 'teclado-rgb', quantity: 1 },
    { id: 'monitor-144hz', quantity: 1 },
];
const catalogState = {
    term: '',
    category: 'todos',
};

let carrinho = carregarCarrinho();

function normalizarCarrinho(listaCarrinho) {
    if (!Array.isArray(listaCarrinho)) {
        return [];
    }

    return listaCarrinho
        .map((item) => {
            const produtoBase = getProductById(item.id);
            const quantidade = Number.isInteger(item.quantidade ?? item.quantity) && (item.quantidade ?? item.quantity) > 0
                ? (item.quantidade ?? item.quantity)
                : 1;

            return {
                id: item.id,
                nome: item.nome || produtoBase.name,
                preco: Number(item.preco ?? produtoBase.price) || 0,
                imagem: item.imagem || produtoBase.image,
                quantidade,
                quantity: quantidade,
            };
        })
        .filter((item) => Boolean(TECH_STORE_PRODUCTS[item.id]));
}

function carregarCarrinho() {
    const dadosSalvos = window.localStorage.getItem(CART_STORAGE_KEY) || window.localStorage.getItem(LEGACY_CART_STORAGE_KEY);
    let carrinhoCarregado;

    if (!dadosSalvos) {
        carrinhoCarregado = normalizarCarrinho(DEFAULT_CART);
    } else {
        try {
            carrinhoCarregado = normalizarCarrinho(JSON.parse(dadosSalvos));
        } catch {
            carrinhoCarregado = normalizarCarrinho(DEFAULT_CART);
        }
    }

    const serializado = JSON.stringify(carrinhoCarregado);
    window.localStorage.setItem(CART_STORAGE_KEY, serializado);
    window.localStorage.setItem(LEGACY_CART_STORAGE_KEY, serializado);

    return carrinhoCarregado;
}

function sincronizarCarrinhoStorage() {
    const serializado = JSON.stringify(carrinho);
    window.localStorage.setItem(CART_STORAGE_KEY, serializado);
    window.localStorage.setItem(LEGACY_CART_STORAGE_KEY, serializado);
}

function salvarCarrinho() {
    sincronizarCarrinhoStorage();
}

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

function getAssetPrefix() {
    return window.location.pathname.includes('/paginas/') ? '../' : '';
}

function getPaginasPrefix() {
    return window.location.pathname.includes('/paginas/') ? '' : 'paginas/';
}

function getProductList() {
    return Object.values(TECH_STORE_PRODUCTS);
}

function getProductById(productId) {
    return TECH_STORE_PRODUCTS[productId] || TECH_STORE_PRODUCTS['teclado-rgb'];
}

function getSelectedProductId() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('produto') || searchParams.get('id') || 'teclado-rgb';
}

function readCart() {
    carrinho = normalizarCarrinho(carrinho);
    return carrinho.map((item) => ({ ...item }));
}

function saveCart(cartItems) {
    carrinho = normalizarCarrinho(cartItems);
    salvarCarrinho();
}

function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);

    adicionarAoCarrinho(productId, product.name, product.price, product.image, quantity);
}

function removeFromCart(productId) {
    const itemIndex = carrinho.findIndex((item) => item.id === productId);

    if (itemIndex >= 0) {
        removerDoCarrinho(itemIndex);
    }
}

function updateCartQuantity(productId, delta) {
    const item = carrinho.find((currentItem) => currentItem.id === productId);

    if (!item) {
        return;
    }

    item.quantity += delta;
    item.quantidade = item.quantity;

    if (item.quantity <= 0) {
        carrinho = carrinho.filter((currentItem) => currentItem.id !== productId);
        salvarCarrinho();
        return;
    }

    salvarCarrinho();
}

function clearCart() {
    carrinho = [];
    salvarCarrinho();
}

function adicionarAoCarrinho(id, nome, preco, imagem, quantidade = 1) {
    const itemExistente = carrinho.find((item) => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
        itemExistente.quantity = itemExistente.quantidade;
    } else {
        carrinho.push({
            id,
            nome,
            preco,
            imagem,
            quantidade,
            quantity: quantidade,
        });
    }

    salvarCarrinho();
    renderizarCarrinho();
}

function removerDoCarrinho(index) {
    if (index < 0 || index >= carrinho.length) {
        return;
    }

    carrinho.splice(index, 1);
    salvarCarrinho();
    renderizarCarrinho();
}

function renderizarCarrinho() {
    const corpoTabela = document.getElementById('corpo-tabela-carrinho');

    if (!corpoTabela) {
        return;
    }

    const itensCarrinho = readCart();

    corpoTabela.innerHTML = itensCarrinho.length
        ? itensCarrinho
              .map((item, index) => {
                  const precoTotal = item.preco * item.quantidade;

                  return `
                      <tr>
                          <td data-label="Produto">${item.nome}</td>
                          <td data-label="Quantidade">${item.quantidade}</td>
                          <td data-label="Preço Unitário">${formatCurrency(item.preco)}</td>
                          <td data-label="Preço Total">${formatCurrency(precoTotal)}</td>
                          <td data-label="Ações">
                              <button type="button" class="cart-remove-button" data-remover-indice="${index}">Remover</button>
                          </td>
                      </tr>
                  `;
              })
              .join('')
        : `
            <tr>
                <td colspan="5">
                    <div class="cart-empty-state">Seu carrinho está vazio.</div>
                </td>
            </tr>
        `;

    const resumoValores = document.getElementById('resumo-valores');

    if (resumoValores) {
        const resumo = calculateCartSummary(itensCarrinho);

        resumoValores.innerHTML = `
            <h3>Resumo do Pedido</h3>
            <ul>
                <li>Subtotal: ${formatCurrency(resumo.subtotal)}</li>
                <li>Frete: ${resumo.shipping === 0 ? 'R$ 0,00 (Grátis)' : formatCurrency(resumo.shipping)}</li>
                <li><strong>Total Geral: ${formatCurrency(resumo.total)}</strong></li>
            </ul>
        `;
    }

    corpoTabela.querySelectorAll('[data-remover-indice]').forEach((button) => {
        button.addEventListener('click', () => {
            removerDoCarrinho(Number(button.dataset.removerIndice));
        });
    });
}

function calculateCartSummary(cartItems) {
    const items = cartItems.map((item) => {
        const product = getProductById(item.id);

        return {
            ...product,
            quantity: item.quantity,
            lineTotal: product.price * item.quantity,
        };
    });

    const subtotal = items.reduce((total, item) => total + item.lineTotal, 0);
    const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 29.9;

    return {
        items,
        subtotal,
        shipping,
        total: subtotal + shipping,
    };
}

function createProductCard(product, assetPrefix) {
    const paginasPrefix = getPaginasPrefix();

    return `
        <article class="card-produto">
            <h3>${product.name}</h3>
            <img src="${assetPrefix}${product.image}" alt="${product.alt}" loading="lazy">
            <p>${product.shortDescription}</p>
            <p><strong>${formatCurrency(product.price)}</strong></p>
            <a href="${paginasPrefix}detalhes-produto.html?produto=${product.id}">Ver detalhes</a>
        </article>
    `;
}

function getUniqueCategories() {
    return [...new Set(getProductList().map((product) => product.category))].sort();
}

function getCatalogFilters() {
    return {
        term: catalogState.term,
        category: catalogState.category,
    };
}

function filterCatalogProducts(products) {
    const filters = getCatalogFilters();

    return products.filter((product) => {
        const matchesCategory = filters.category === 'todos' || product.category.toLowerCase() === filters.category;
        const searchableText = `${product.name} ${product.shortDescription} ${product.category}`.toLowerCase();
        const matchesTerm = !filters.term || searchableText.includes(filters.term);

        return matchesCategory && matchesTerm;
    });
}

function renderHomeProducts() {
    const heroSection = document.querySelector('#produtos-destaque');

    if (!heroSection) {
        return;
    }

    const assetPrefix = getAssetPrefix();
    const featuredProducts = getProductList().filter((product) => product.featured);

    heroSection.innerHTML = `
        <h2>Produtos em Destaque</h2>
        ${featuredProducts.map((product) => createProductCard(product, assetPrefix)).join('')}
    `;
}

function renderCatalogProducts() {
    const catalogSection = document.querySelector('#lista-produtos');

    if (!catalogSection) {
        return;
    }

    const assetPrefix = getAssetPrefix();
    const catalogProducts = filterCatalogProducts(getProductList());
    const totalProducts = getProductList().length;
    const visibleProducts = catalogProducts.length;

    catalogSection.innerHTML = `
        <div class="catalogo-toolbar">
            <div>
                <h2>Nosso Catálogo</h2>
                <p>Explore todos os nossos produtos. Use a busca e os filtros para encontrar o que deseja.</p>
            </div>
            <div class="catalogo-status">
                <strong>${visibleProducts}</strong>
                <span>de ${totalProducts} produtos exibidos</span>
            </div>
        </div>
        <div class="catalogo-ferramentas">
            <label class="catalogo-busca">
                <span>Buscar</span>
                <input id="catalogo-busca" type="search" placeholder="Procure por nome, categoria ou descrição">
            </label>
            <div class="catalogo-filtros" role="group" aria-label="Filtros de categoria">
                <button type="button" class="${catalogState.category === 'todos' ? 'is-active' : ''}" data-category-filter="todos">Todos</button>
                ${getUniqueCategories()
                    .map(
                        (category) =>
                            `<button type="button" class="${catalogState.category === category.toLowerCase() ? 'is-active' : ''}" data-category-filter="${category.toLowerCase()}">${category}</button>`,
                    )
                    .join('')}
            </div>
        </div>
        <div class="catalogo-lista">
            ${
                catalogProducts.length
                    ? catalogProducts.map((product) => createProductCard(product, assetPrefix)).join('')
                    : '<p class="catalogo-vazio">Nenhum produto corresponde aos filtros atuais.</p>'
            }
        </div>
    `;

    const searchInput = document.querySelector('#catalogo-busca');
    const filterButtons = document.querySelectorAll('[data-category-filter]');

    if (searchInput) {
        searchInput.value = catalogState.term;
        searchInput.addEventListener('input', (event) => {
            catalogState.term = event.target.value.trim().toLowerCase();
            renderCatalogProducts();
        });
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            catalogState.category = button.dataset.categoryFilter || 'todos';
            renderCatalogProducts();
        });
    });
}

function renderProductDetails() {
    const detailSection = document.querySelector('#produto-detalhado');

    if (!detailSection) {
        return;
    }

    const assetPrefix = getAssetPrefix();
    const product = getProductById(getSelectedProductId());

    detailSection.innerHTML = `
        <h2>${product.name}</h2>

        <div class="produto-galeria">
            <img src="${assetPrefix}${product.image}" alt="${product.alt}" loading="lazy">
        </div>

        <section id="descricao-produto">
            <h3>Descrição do Produto</h3>
            <p>${product.longDescription}</p>
        </section>

        <section id="especificacoes-produto">
            <h3>Especificações Técnicas</h3>
            <ul>
                ${product.specs.map((spec) => `<li>${spec}</li>`).join('')}
            </ul>
        </section>

        <section id="compra-produto">
            <p>Preço de lançamento:</p>
            <p><strong>${formatCurrency(product.price)}</strong></p>
            <p>
                <a class="button-link" id="adicionar-carrinho" href="carrinho.html?produto=${product.id}">
                    Adicionar ao carrinho
                </a>
            </p>
        </section>

        <p><a class="secondary-link" href="catalogo-produtos.html">← Voltar para o catálogo</a></p>
    `;

    const addToCartButton = document.querySelector('#adicionar-carrinho');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            addToCart(product.id, 1);
        });
    }
}

function renderCart() {
    const corpoTabela = document.getElementById('corpo-tabela-carrinho');

    if (corpoTabela) {
        renderizarCarrinho();
        return;
    }

    const cartSection = document.querySelector('#conteudo-carrinho');

    if (!cartSection) {
        return;
    }

    const cartSummary = calculateCartSummary(readCart());
    const tableRows = cartSummary.items.length
        ? cartSummary.items
              .map(
                  (item) => `
                      <tr>
                          <td data-label="Produto">${item.name}</td>
                          <td data-label="Quantidade">
                              <div class="cart-qty">
                                  <button type="button" data-qty-action="decrease" data-qty-id="${item.id}">−</button>
                                  <span>${item.quantity}</span>
                                  <button type="button" data-qty-action="increase" data-qty-id="${item.id}">+</button>
                              </div>
                          </td>
                          <td data-label="Preço Unitário">${formatCurrency(item.price)}</td>
                          <td data-label="Total">${formatCurrency(item.lineTotal)}</td>
                          <td data-label="Ações"><a href="#" data-remove-item="${item.id}">Remover</a></td>
                      </tr>
                  `,
              )
              .join('')
        : `
            <tr>
                <td colspan="5">
                    <div class="cart-empty-state">
                        Seu carrinho está vazio. Volte ao catálogo para incluir novos itens.
                    </div>
                </td>
            </tr>
        `;

    cartSection.innerHTML = `
        <h2>O Seu Carrinho de Compras</h2>
        <p>Confira os itens selecionados antes de prosseguir para o pagamento.</p>

        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Total</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>

        <section id="resumo-valores">
            <h3>Resumo do Pedido</h3>
            <ul>
                <li>Subtotal: ${formatCurrency(cartSummary.subtotal)}</li>
                <li>Frete: ${cartSummary.shipping === 0 ? 'R$ 0,00 (Grátis)' : formatCurrency(cartSummary.shipping)}</li>
                <li><strong>Total Geral: ${formatCurrency(cartSummary.total)}</strong></li>
            </ul>
        </section>

        <section id="acoes-carrinho">
            <p><a class="secondary-link" href="catalogo-produtos.html">← Continuar comprando</a></p>
            <p><button type="button" class="button-link secondary cart-clear-button" data-clear-cart>Limpar carrinho</button></p>
            <p><a class="button-link" href="checkout.html">Fechar pedido e ir para o pagamento →</a></p>
        </section>
    `;

    cartSection.querySelectorAll('[data-remove-item]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            removeFromCart(link.dataset.removeItem);
            renderCart();
            renderCheckoutSummary();
        });
    });

    cartSection.querySelectorAll('[data-qty-action]').forEach((button) => {
        button.addEventListener('click', () => {
            const { qtyAction: action, qtyId: productId } = button.dataset;

            if (action === 'increase') {
                updateCartQuantity(productId, 1);
            }

            if (action === 'decrease') {
                updateCartQuantity(productId, -1);
            }

            renderCart();
            renderCheckoutSummary();
        });
    });

    const clearCartButton = cartSection.querySelector('[data-clear-cart]');

    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            clearCart();
            renderCart();
            renderCheckoutSummary();
        });
    }
}

function renderCheckoutSummary() {
    const reviewSection = document.querySelector('#revisao-final');

    if (!reviewSection) {
        return;
    }

    const cartSummary = calculateCartSummary(readCart());

    reviewSection.innerHTML = `
        <h3>4. Confirmar Valores</h3>
        <ul>
            <li>Total dos Produtos: ${formatCurrency(cartSummary.subtotal)}</li>
            <li>Frete: ${cartSummary.shipping === 0 ? 'R$ 0,00' : formatCurrency(cartSummary.shipping)}</li>
            <li><strong>Total a Pagar: ${formatCurrency(cartSummary.total)}</strong></li>
        </ul>

        <p>
            <button type="submit">Finalizar Compra e Gerar Pagamento</button>
        </p>
    `;
}

function setupCheckoutFeedback() {
    const feedback = document.querySelector('#checkout-feedback');

    if (!feedback) {
        return;
    }

    feedback.innerHTML = '';
    feedback.hidden = true;
}

function showCheckoutFeedback(message) {
    const feedback = document.querySelector('#checkout-feedback');

    if (!feedback) {
        return;
    }

    feedback.hidden = false;
    feedback.innerHTML = `<div class="checkout-feedback success">${message}</div>`;
}

function validateCheckoutForm(form) {
    const requiredFields = [
        { element: form.querySelector('#nome'), message: 'Informe o nome completo.' },
        { element: form.querySelector('#email'), message: 'Informe um e-mail válido.' },
        { element: form.querySelector('#cpf'), message: 'Informe um CPF válido.' },
        { element: form.querySelector('#cep'), message: 'Informe um CEP válido.' },
        { element: form.querySelector('#rua'), message: 'Informe a rua ou avenida.' },
        { element: form.querySelector('#numero'), message: 'Informe o número.' },
        { element: form.querySelector('#cidade'), message: 'Informe a cidade.' },
    ];

    let firstInvalidField = null;

    requiredFields.forEach(({ element, message }) => {
        if (!element) {
            return;
        }

        element.setCustomValidity('');

        const value = element.value.trim();
        const invalidEmail = element.type === 'email' && value && !element.checkValidity();
        const invalidCpf = element.id === 'cpf' && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value);
        const invalidCep = element.id === 'cep' && !/^\d{5}-\d{3}$/.test(value);

        if (!value || invalidEmail || invalidCpf || invalidCep) {
            element.setCustomValidity(message);
            firstInvalidField = firstInvalidField || element;
        }
    });

    if (firstInvalidField) {
        firstInvalidField.reportValidity();
        return false;
    }

    return true;
}

function setupNavigationState() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('nav a').forEach((link) => {
        const linkFile = new URL(link.getAttribute('href'), window.location.href).pathname.split('/').pop();

        if (linkFile === currentFile) {
            link.setAttribute('aria-current', 'page');
        }
    });
}

function setupCheckoutForm() {
    const checkoutForm = document.querySelector('#form-checkout');

    if (!checkoutForm) {
        return;
    }

    setupCheckoutFeedback();

    checkoutForm.addEventListener('submit', (event) => {
        if (!validateCheckoutForm(checkoutForm)) {
            return;
        }

        event.preventDefault();

        const nameField = document.querySelector('#nome');
        const customerName = nameField && nameField.value.trim() ? nameField.value.trim().split(' ')[0] : 'Cliente';

        window.alert(`Pedido recebido, ${customerName}. A simulação de pagamento foi preparada com sucesso.`);
        saveCart([]);
        checkoutForm.reset();
        renderCheckoutSummary();
        showCheckoutFeedback(`Pedido confirmado para ${customerName}. A loja gerou a simulação de pagamento com sucesso.`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupNavigationState();
    renderHomeProducts();
    renderCatalogProducts();
    renderProductDetails();
    renderCart();
    renderCheckoutSummary();
    setupCheckoutForm();

});
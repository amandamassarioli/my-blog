function createNavbar(currentPage) {
    // Determina se estamos na página principal (index) ou em uma subpágina
    const isRoot = !currentPage.includes('/pages/');

    // Define os caminhos base dependendo se estamos na raiz ou em uma subpágina
    const basePath = isRoot ? '' : '../';
    const pagesPath = isRoot ? 'pages/' : '';

    // HTML da navbar com site title e botão toggle para dispositivos móveis
    const navbarHTML = `
        <h1 class="site-title">Amanda's Blog</h1>
        <button class="nav-toggle" aria-label="Toggle navigation">☰</button>
        <nav>
            <ul>
                <li><a href="${basePath}index.html" ${
        currentPage.includes('index.html') && isRoot ? 'class="active"' : ''
    }>Home</a></li>
                <li><a href="${pagesPath}about.html" ${
        currentPage.includes('about.html') ? 'class="active"' : ''
    }>about me</a></li>
                <li><a href="${pagesPath}books.html" ${
        currentPage.includes('books.html') ? 'class="active"' : ''
    }>books</a></li>
                <li><a href="${pagesPath}categories.html" ${
        currentPage.includes('categories.html') ? 'class="active"' : ''
    }>categories</a></li>
                <li><a href="${pagesPath}contact.html" ${
        currentPage.includes('contact.html') ? 'class="active"' : ''
    }>contact</a></li>
            </ul>
        </nav>
    `;

    return navbarHTML;
}

// Função para inserir a navbar no elemento header
function insertNavbar() {
    const currentPage = window.location.pathname;
    const header = document.querySelector('header');

    if (header) {
        header.innerHTML = createNavbar(currentPage);

        // Add event listener for mobile menu toggle
        const toggleButton = document.querySelector('.nav-toggle');
        const nav = document.querySelector('nav');

        if (toggleButton && nav) {
            toggleButton.addEventListener('click', () => {
                nav.classList.toggle('active');
                toggleButton.textContent = nav.classList.contains('active')
                    ? '✕'
                    : '☰';
            });
        }
    }
}

// Executa a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', insertNavbar);

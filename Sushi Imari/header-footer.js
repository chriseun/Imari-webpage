class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="header">
        <div class="container">
            <nav class="nav">
                <div class="menu-toggle menu-toggle-1">
                    <i class="fas fa-bars"></i>
                    <i class="fas fa-times"></i>
                </div>
                <a href="index.html" class="logo">
                    <p class="logo-imari logo-imari-white">Sushi <img src="./images/Main-Logo.png" alt="Side-Logo"
                            class="side-logo">
                        Imari</p>
                </a>
                <ul class="nav-list">
                    <li class="nav-item nav-item-1">
                        <a href="index.html" class="nav-link-1 active">Home</a>
                    </li>

                    <li class="nav-item nav-item-1">
                        <a href="menutesting.html" class="nav-link-1">Menu</a>
                    </li>
                    <li class="nav-item nav-item-1">
                        <a href="drink.html" class="nav-link-1">Drink</a>
                    </li>
                    <li class="nav-item nav-item-1">
                        <a href="gallery.html" class="nav-link-1">Gallery</a>
                    </li>
                    <li class="nav-item nav-item-1">
                        <a href="contact.html" class="nav-link-1">Contact</a>
                    </li>

                    <li class="nav-item nav-item-online contact-item">
                        <a href="https://sushiimari.menu11.com/costamesa/order" class="nav-link">Order-Online</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    `
  }
}


customElements.define('my-header', MyHeader)

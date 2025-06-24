const NavBar = () => {
    return (
  <nav> 
    <div className="navbar-logo">
    <img src="/ProdlensLogo.svg" alt="Prodlens Logo" />
    <span>Prodlens</span>
    </div>
    <div className="navbar-links">
        <a href="/trends">Trends</a>
        <a href="/reviews">Reviews</a>
        <a href="/qa">Q&A</a>
        <a href="https://github.com/HYPERVAPOR/prodlens" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <img src="/github-mark-white.svg" alt="GitHub" />
        </a>
        <button className="language-button">
            <img src="/globe.svg" alt="Language" />
            <span>中文</span>
        </button>

    </div>
  </nav>
    )
}
export default NavBar;
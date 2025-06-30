import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <span className={styles.navbarLogo}>
          <img
            src="/ProdlensLogo.svg"
            alt="Prodlens Logo"
            width={24}
            height={24}
          />
          <span>Prodlens</span>
        </span>
        
        {/* 隐藏的checkbox用于控制菜单状态 */}
        <input 
          type="checkbox" 
          id="menu-toggle" 
          className={styles.menuToggle}
        />
        
        {/* 汉堡菜单按钮 */}
        <label 
          htmlFor="menu-toggle"
          className={styles.hamburgerMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </label>

        <div className={styles.navbarLinks}>
        <a href="/trends">Trends</a>
        <a href="/reviews">Reviews</a>
        <a href="/qa">Q&A</a>
        <a
          href="https://github.com/HYPERVAPOR/prodlens"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            src="/github-mark-white.svg"
            alt="GitHub"
            width={24}
            height={24}
          />
        </a>
        <button className={styles.languageButton}>
          <img src="/globe.svg" alt="Language" />
          <span>中文</span>
        </button>
        </div>
    </nav>
  );
};
export default NavBar;

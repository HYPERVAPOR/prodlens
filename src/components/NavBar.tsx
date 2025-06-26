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
    </nav>
  );
};
export default NavBar;

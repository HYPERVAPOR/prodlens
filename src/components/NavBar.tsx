"use client";

import Image from 'next/image';
import styles from "./NavBar.module.scss";
import LanguageSelector from "./LanguageSelector";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 200; // 最大滚动距离
      const progress = Math.min(scrollTop / maxScroll, 1);
      
      setIsScrolled(scrollTop > 30);
      setScrollProgress(progress);
    };

    // 确保window对象存在后再添加事件监听器
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        // 在清理函数中也添加安全检查
        if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  return (
    <nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      style={{
        '--scroll-progress': scrollProgress
      } as React.CSSProperties}
    >
        <span className={styles.navbarLogo}>
          <Image
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
          <Image
            src="/github-mark-white.svg"
            alt="GitHub"
            width={24}
            height={24}
          />
        </a>
        <LanguageSelector />
        </div>
    </nav>
  );
};
export default NavBar;

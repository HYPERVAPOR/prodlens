import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            © {currentYear} Prodlens. Licensed under{' '}
            <a 
              href="https://www.gnu.org/licenses/gpl-3.0.en.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              GNU General Public License v3.0
            </a>
          </div>
          
          <div className={styles.contact}>
            <a 
              href="mailto:contact@prodlens.com" 
              className={styles.link}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
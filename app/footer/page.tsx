// Footer.js
import React from 'react';
import styles from './footer.module.css'

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
      <footer className={styles.footerContainer}>
        <p>© {year} mister virtuso</p>
      </footer>
    );
  }


export default Footer;

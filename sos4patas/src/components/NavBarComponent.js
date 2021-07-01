import React from 'react';
import styles from '../styles/components/NavBar.module.css';
import Link from 'next/link';
    


export default function components() {
 return (
  <header className={styles.container}>
      <nav className={styles.navBar}>
          <div className={styles.navMenu}>

              <div className={styles.logo}>
                
                <Link  href="/">
                  <img className={styles.imgLogo} src='/logodog.svg' />
                </Link>      
              </div>

              <ul className={styles.navList}>
                <li className={styles.navLink}>
                    <Link href="/">
                      <a className={styles.textLink}>Home</a>
                    </Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/about">
                       <a className={styles.textLink} >Sobre</a>
                    </Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/donation">
                      <a className={styles.textLink}>Faça sua doação</a>
                    </Link>
                    
                </li>
                <li className={styles.navLink}>
                    <Link href="https://www.instagram.com/explore/tags/adote/">
                      <a className={styles.textLink} style={{color: 'rgb(10, 213, 248)'}}>#Adote</a>
                    </Link>
                </li>
              </ul>
                    
              <div className={styles.navSocials}>
                      <a href="https://www.facebook.com/sos4patas.pr/?ref=page_internal">
                       <img src='/Vector-fb.svg'/>
                      </a>
                      
                      <a href="https://www.instagram.com/adocaosos4patas.parana/">
                       <img src='/Vector-insta.svg'/>
                      </a>
                      
              </div>

                <div className={styles.hamburger} >
                      <img src='/btnMenu.svg'/>
                </div>   
          </div>
      </nav>

              
  </header>
 );
}
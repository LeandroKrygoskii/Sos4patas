import React from 'react';
import styles from '../styles/components/Footer.module.css';

import Image from 'next/image';



export default function components() {
 return (
    
    <footer className={styles.siteFooter}>
      <div className="container">
        <div className={styles.row}>
         

        
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className={styles.footerLinks}>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Home</a></li>
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
             
              <li><a href="http://scanfcode.com/privacy-policy/">Adoption</a></li>
              
            </ul>
          </div>
          <div className="col-md-8 col-sm-6 col-xs-12">
            <div className={styles.divText}>
              <p style={{color:'#f2f2f2'}} className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
              <a style={{color:"#000", fontWeight:700}} href="#"> Sos 4 patas Campo Largo</a>.
              </p>
              <p style={{color:'#f2f2f2'}}>desenvolvido por 
              <a  style={{color:"#000", fontWeight:700}} href="#"> KryTech</a>.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className={styles.socialIcons}>
              <li>
                  <a className={styles.linkSocial} href="https://www.facebook.com/sos4patas.pr/?ref=page_internal">
                       <img className={styles.imgSocial} src="/Vector-fb.svg" alt="face"/>
                 </a>
              </li>

              <li> 
                 <a className={styles.linkSocial} href="https://www.instagram.com/adocaosos4patas.parana/">
                 <img className={styles.imgSocial} src="/Vector-insta.svg" alt="face"/>
                  </a>
              </li>
               
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
         
          </div>

          
      </div>
  </footer>
 );
}
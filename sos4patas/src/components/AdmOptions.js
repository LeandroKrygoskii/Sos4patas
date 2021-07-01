import React, { useState } from 'react';
import styles from '../styles/components/AdmOption.module.css';
import Modal from 'react-modal';
import Link from 'next/link';



export default function components(props) {

 return (
    <div className={styles.menuBar}>
          <div className={styles.divLogo}>
                <img className={styles.image} src="/logodog.svg"/>
          </div>
         <div className={styles.row}>
           
          <Link href="/newAdoption">
            <div className={styles.item}>
              <h5 className={styles.itemTitle}>Nova Adoção</h5>
            </div>
           </Link>

           <Link href="/listAdoption">
              <div className={styles.item}>
              <h5 className={styles.itemTitle}>Listar Todas as Adoções Cadastradas</h5>
              </div>
           </Link>

           <Link href="/listDenuncias">
            <div className={styles.item}>
                <h5 className={styles.itemTitle}>Ver denuncias de Maus tratos</h5>
            </div>
           </Link>
           
           <Link href="/listRequestAdoption">
            <div className={styles.item}>
              <h5 className={styles.itemTitle}>Listar Pedidos de Adoção</h5>
            </div>
           </Link>
         </div> 
      </div>  
 );
}
import React from 'react';
import { GetServerSideProps} from 'next';
import { parseCookies } from 'nookies';
import styles from '../styles/pages/DashBoard.module.css';
import AdmComponent from '../components/AdmOptions';
import Link from 'next/link';

export default function pages() {
 return (
   <div className={styles.container}>
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
     
   </div>
 );
}


export const getServerSideProps  = async (ctx) => {
   
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if(!token){
    return{
      redirect: {
        destination: '/sign',
        permanent : false
      }
    }
  }
  console.log(ctx.req.cookies)

  return{
   props: {
     
   }
  }
}
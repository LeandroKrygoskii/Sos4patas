import React from 'react';
import { GetServerSideProps} from 'next';
import { parseCookies } from 'nookies';
import styles from '../styles/pages/DashBoard.module.css';
import AdmComponent from '../components/AdmOptions';
import Link from 'next/link';
import {BsFileEarmarkDiff, BsListOl ,BsEyeFill} from 'react-icons/bs'
import {SiDatadog} from 'react-icons/si';

export default function pages() {
 return (
   <div className={styles.container}>
        <div className={styles.menuBar}>
          <div className={styles.divLogo}>
                <img className={styles.image} src="/logodog.svg"/>
          </div>
         <div className={styles.row}>
           
          <Link href="/newAdoption">
            <div style={{backgroundColor: '#0696E5'}} className={styles.item}>
              <BsFileEarmarkDiff size={30} color={'#fff'}/>
              <h5 className={styles.itemTitle}>Nova Adoção</h5>
            </div>
           </Link>

           <Link href="/listAdoption">
              <div style={{backgroundColor: '#EBC529'}} className={styles.item}>
              <BsListOl size={30} color={'#fff'}/>
              <h5 className={styles.itemTitle}>Adoções Cadastradas</h5>
              </div>
           </Link>

           <Link href="/listDenuncias">
            <div style={{backgroundColor:'#F8687B'}} className={styles.item}>
            <BsEyeFill size={30} color={'#fff'}/>
                <h5 className={styles.itemTitle}>Ver denuncias</h5>
            </div>
           </Link>
           
           <Link href="/listRequestAdoption">
            <div  style={{backgroundColor:'#00c275'}} className={styles.item}>
              <SiDatadog size={30} color={'#fff'}/>
              <h5 className={styles.itemTitle}>Pedidos de Adoção</h5>
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
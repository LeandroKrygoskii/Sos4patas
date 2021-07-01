
import NavBarComponent from '../components/NavBarComponent';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import BgImgcomponents from '../components/BgImgComponent';
import Link from 'next/link';


export default function Home() {
  return (
  <>
    <Head><title>Sos 4 patas Campo Largo</title></Head>
    
    <div className={styles.container}>

          
            <div className={styles.containerItem1}>

                <div className={styles.imageContent}>
                    <img className={styles.image}  src="/newlogo.png"/>
                </div>
              <div className={styles.sup}>
                <p className={styles.container1Content}>
                    Temos como atividade a associação de defesa de direitos sociais
                    e nosso objetivo é resgatar animais que se encontram em estado de abandono,
                    acidentados ou em maus-tratos.
                </p>

                <div className={styles.container1Btns}>
                  <Link href="/adote">  
                     <a className={styles.btn}>ADOTAR</a>
                  </Link>

                  <Link href="/help">
                     <a className={styles.btn2}>AJUDAR</a>
                  </Link>
                </div>
             </div>
            </div>
    </div>
  </>
   
  )
}

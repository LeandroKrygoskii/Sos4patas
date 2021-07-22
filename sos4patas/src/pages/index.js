import React, {useEffect, useState} from 'react';
import NavBarComponent from '../components/NavBarComponent';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import BgImgcomponents from '../components/BgImgComponent';
import Link from 'next/link';
import CardComponent from '../components/CardDonationComponent';
import Footer from '../components/Footer';
import CardContainer3 from '../components/CardContainer3Home';


export default function Home() {

  

     

  return (
  <>
    <Head><title>Sos 4 patas Campo Largo</title></Head>
    
    
    <div className={styles.container}>

        <div className={styles.containerMain}>

         <div className={styles.imgDogContainer}>
                    <img className={styles.imgdsit}  src="/dogs/dogsit.png"/>
          </div>
            <div className={styles.containerItem1}>

                {/* <div className={styles.imageContent}>
                    <img className={styles.image}  src="/newlogo.png"/>
                </div> */}
                <div className={styles.container1Title}>
                  <h1>Ajude um animal.</h1>
                  <h1>Mude uma vida.</h1>
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
                  
                  <Link href="/donation">
                     <a className={styles.btn2}>AJUDAR</a>
                  </Link>
                </div>
             </div>
            </div>
        </div> 
        
        <div className={styles.container2}>
              <hr className={styles.line}/>
              <h1 className={styles.titleContainer2}>Formas de Ajudar</h1>
        </div>

        <div className={styles.container2Row}>
         <CardComponent
            img="/dogs/9.png"
            title="Doe em dinheiro"
            link="Clique aqui"
            content="Ajude com qualquer quantia."
            type="DOADOR"
            typeColor="#0696E5"
            refLinkCard="/"
            color="#0696E5"
          />

          <CardComponent
            img="/dogs/12.png"
            title="Patrocine"
            type="PATROCINADOR"
            content="Seja um de nossos patrocinadores."
            link="Clique aqui"
            typeColor="#00C275"
            color="#00C275"
            refLinkCard="https://www.facebook.com/sos4patas.pr/support/?surface=page_top_cta_button&entrypoint_surface=page_top_cta_button"
          />

          <CardComponent
            img="/dogs/catadote.png"
            title="Adote"
            type="ADOÇÃO"
            link="Clique aqui"
            refLinkCard="/adote"
            typeColor="#F8687B"
            color="#F8687B"
          />

          <CardComponent
             img="/dogs/11.png"
             type="DENUNCIE"
             title="Maus Tratos"
             content="gaze, esparadrapo, algodão, álcool, produtos de limpeza."
             color="#EBC529"
             typeColor="#EBC529"
          />
        </div>

        <div className={styles.container3}>
            <hr className={styles.line}/>
            <h1 className={styles.container3Title}>Porque Ajudar?</h1>
            
        </div>
        <div className={styles.container3Row}>
          <CardContainer3
           icone="FaHeart"
           title="Trabalhamos com amor e dedicação"
           content="Atuamos no âmbito da saúde e da educação através de atendimento Medico-Veterinario preferencial
            a animais de rua e aqueles pertencentes a famílias de baixa renda."

          />
          <div className={styles.divBotm}> 
            <CardContainer3
            icone="FiEdit2"
            title="Promoção da ética e cidadania"
            content="Promoção da ética e da cidadania, aproximando as pessoas físicas e jurídicas, leigos ou profissionais que possam oferecer aos animais, abandonados ou não, melhores condições de vida."
            />
          </div>
          <CardContainer3
           icone="BiLike"
           title="Com carinho e sem fins lucrativos"
           content="A organização conta com verbas adquiridas por doações, eventos e bazares constituídos das doações recebidas."
          />
        </div>
        <Footer/>
    </div>
  </>
   
  )
}

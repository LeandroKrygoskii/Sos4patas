import React from 'react';
import CardComponent from '../components/CardDonationComponent';
import styles from '../styles/Help.module.css';

export default function Help() {
 return (
   <div className={styles.container}>
    
     <h1 className={styles.mainTitle}>Formas de Ajudar</h1>
      <div className={styles.row}> 

       
         <CardComponent
            img="/dogs/cachorro1.jpg"
            title="Doe em dinheiro"
            link="Clique aqui"
            refLinkCard="/"
          />
         

          <CardComponent
            img="/dogs/cachorro2.jpeg"
            title="Doe para cuidados"
            content="gaze, esparadrapo, algodão, ácool, produtos de limpeza."
          />

    
         <CardComponent
            img="/dogs/cachorro3.jpg"
            title="Apoie"
            content="Nossas campanhas, Eventos e rifas para arrecadar fundos."
          />

          <CardComponent
            img="/dogs/cachorro4.jpg"
            title="Denuncie"
            content="Denuncie maus tratos contra animais."
          />

     
         <CardComponent
            img="/dogs/cachorro5.jpg"
            title="Patrocine"
            content="Seja um de nossos patrocinadores."
            link="Clique aqui"
            refLinkCard="https://www.facebook.com/sos4patas.pr/support/?surface=page_top_cta_button&entrypoint_surface=page_top_cta_button"
          />

          <CardComponent
            img="/dogs/gato1.jpg"
            title="Adote"
            link="Clique aqui"
            refLinkCard="/adote"
          />

   

     </div>



         


   </div>
 );
}
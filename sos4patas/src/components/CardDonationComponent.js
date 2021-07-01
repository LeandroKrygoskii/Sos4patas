import React from 'react';
import styles from '../styles/components/CardDonation.module.css';

export default function components(props) {
 return (
   <div className={styles.container}>
    
    <div className={styles.imgCard}>
      <img className={styles.image} src={props.img}/>
    </div>

     <div className={styles.cardContent}>
       <h4 className={styles.cardTitle}>{props.title}</h4>
       <a href={props.refLinkCard} className={styles.linkCard}>{props.link}</a>
       <p className={styles.cardText}>{props.content}</p>
       
     </div>
      
   </div>
 );
}
import React from 'react';
import styles from '../styles/components/CardDonation.module.css';

export default function components(props) {
 return (
   <div style={{backgroundColor: props.color}} className={styles.container}>
    
    
     <div className={styles.cardContent}>
       <div className={styles.typeHelp}>
         <h6 style={{color: props.typeColor}}>{props.type}</h6>
       </div>
       <h4 className={styles.cardTitle}>{props.title}</h4>
       
       <p className={styles.cardText}>{props.content}</p>
       <a href={props.refLinkCard} className={styles.linkCard}>{props.link}</a>
     </div>
     <div className={styles.imgCard}>
      <img className={styles.image} src={props.img}/>
    </div>

      
   </div>
 );
}
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/ShowDonation.module.css';  

export default function components(props) {
 return (
   <div className={styles.container}>
     <img className={styles.image} src={props.img}/>
      
      <div className={styles.alignContent}>
        <a href={props.href} className={styles.title}>{props.title}</a>
        <p className={styles.content}>{props.content}</p>
      </div>
   </div>
 );
}
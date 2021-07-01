import React from 'react';
import styles from '../styles/components/Porte.module.css';

export default function components(props){

    const myClass = props.active ? styles.active : styles.container
 return (
   <div className={myClass}>
       <span className={styles.textGenero}>{props.porte}</span>
   </div>
 );
}
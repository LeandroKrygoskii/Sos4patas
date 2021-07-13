import React from 'react';
import styles from '../styles/components/CardContainer3.module.css';
import {FaHeart} from 'react-icons/fa';
import {FiEdit2} from 'react-icons/fi';
import {BiLike} from 'react-icons/bi';

export default function Components(props) {
    
    function selectIcone(){
        const icone = props.icone;

        if(icone === "FaHeart"){
            return(
                <FaHeart className={styles.icone} size={30} />
            )
        }
        if(icone === "FiEdit2"){
            return(
                <FiEdit2 className={styles.icone} size={30}/>
            )
        }
        if(icone === "BiLike"){
            return(
                <BiLike className={styles.icone} size={30}/>
            )
        }
    }

 return (
    <div className={styles.cardContainer3}>
    <section className={styles.imgCardContainer3}>
       {selectIcone()}
    </section>
       <div className={styles.cardContainer3AllContent}>
          <h3 className={styles.cardContainer3Title}>{props.title}</h3>
          <p className={styles.cardContainer3Content}>
             {props.content}
          </p>
       </div>
       
    </div>
 );
}
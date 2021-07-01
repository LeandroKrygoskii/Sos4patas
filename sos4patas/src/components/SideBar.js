import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import styles from '../styles/components/SideBar.module.css';
import Link from 'next/link';

export default function components() {
 return (
    <aside className={styles.asideArea}>
    <img className={styles.imgHeader} src={'/logodog.svg'}/>


    <footer>
        <Link href="/dashboard">
            <button className={styles.btn} type="button">
            <FiArrowLeft size={24} color="#FFF"/>
            </button>
        </Link>
    </footer>

</aside>
 );
}
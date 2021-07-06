import React from 'react';
import styles from '../styles/components/Pagination.module.css';

export default function Pagination({itemsPerPage, totalItems, paginate}) {

    const pageNumbers = [];

    for(let i =1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

 return (
   <nav>
        <ul className={styles.pagination}>
          {pageNumbers.map(number => (
              <li key={number} className={styles.pageItem}>
                <a tabIndex="0" onClick={() => paginate(number)} className={styles.pageLink}>
                    {number}
                </a>
              </li>
          ))}

        </ul>

   </nav>
 );
}
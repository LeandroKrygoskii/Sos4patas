import React , {useEffect, useState} from 'react';
import styles from '../styles/pages/Adote.module.css';
import AdoteCardComponent from '../components/CardAdote';

import api from '../services/api';
import Link from 'next/link';

export default function pages() {

  const [listData , setListData] = useState([]);

  useEffect(() => {
    getList();
    
  },[]);


   async function getList(){
      try {
        
        const response = await api.get('/adoption');
        const listData = response.data;
        setListData(listData);
        console.log(listData)
      } catch (error) {
        console.error(error);
      }
      
    }

 return (

   <div className={styles.container}>
        <button  onClick={() => getList()}>Animais para Adoção</button>
     <div className={styles.listData}>

       {listData.map((item) => (
       
          <AdoteCardComponent 
              data={item}
              key={item.id}
              
          />
        
       ))}
       
     </div>

   </div>

 );
}
import React, {useEffect, useState} from 'react';
import styles from '../styles/pages/ListAdoption.module.css';
import api from '../services/api';
import AdoteCardComponent from '../components/CardAdoteAdm';



export default function pages() {

  const [listData , setListData] = useState([]);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    getList();
    
  },[listData]);


   async function getList(){
      try {
        
        await api.get('/adoption').then(response => {
          const listData = response.data;
           setListData(listData);
        })
      } catch (error) {
        console.error(error);
      }
      
    }



 return (
 <div className={styles.container}>
  <button  onClick={getList}>ATUALIZAR</button>
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
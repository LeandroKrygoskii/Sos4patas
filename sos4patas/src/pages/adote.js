import React , {useEffect, useState} from 'react';
import styles from '../styles/pages/Adote.module.css';
import AdoteCardComponent from '../components/CardAdote';
import Pagination from '../components/Pagination';

import api from '../services/api';
import Link from 'next/link';

export default function pages() {

  const [listData , setListData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, SetItemsPerPage] = useState(12);

  useEffect(() => {
    getList();
    
  },[]);


  //get current 
  const indexLastItem = currentPage * itemsPerPage;
  const indexFistItem = indexLastItem - itemsPerPage;
  const currentItem = listData.slice(indexFistItem, indexLastItem);
  

  function handlePageChange() {
    console.log(currentItem);
   
  }


   async function getList(){
      try {
        
        const response = await api.get('/adoption');
        const listData = response.data;
        setListData(listData);
        
      } catch (error) {
        console.error(error);
      }
      
    }


    function getLengthList(){
      const totalCard = listData.length;
      console.log('total ' + totalCard);
    }


    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

 return (

   <div className={styles.container}>
        <button  onClick={() => handlePageChange()}>Teste</button>
        <Pagination/>
     
     <div className={styles.listData}>
          <AdoteCardComponent 
              data={currentItem}  
          />
        
     </div>

     <Pagination itemsPerPage={itemsPerPage} totalItems={listData.length} paginate={paginate}/>
    
   </div>

 );
}
import React, { useEffect, useState } from 'react';
import styled from '../styles/pages/ListDenuncias.module.css';
import api from '../services/api';
import DenunciasComponent from '../components/DenunciasComponent';
import Paginate from '../components/Pagination';

export default function pages() {
   
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, SetItemsPerPage] = useState(5);
  const [data , setData] = useState([]);

  useEffect(() => { 
    api.get('/denuncias').then(
      response => {
        setData(response.data)
      }
    );
    
  } ,[])


   //get current 
   const indexLastItem = currentPage * itemsPerPage;
   const indexFistItem = indexLastItem - itemsPerPage;
   const currentItem = data.slice(indexFistItem, indexLastItem);

   //change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

 return (
   <div className={styled.container}>
     <div className={styled.containerItem}>
        <div style={{display:'flex'}}>
           <h2>Lista de Denuncias</h2>  
        </div>

          <DenunciasComponent data={currentItem}/>
         
      </div>
      <Paginate  itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate}/>
   </div>
 );
}
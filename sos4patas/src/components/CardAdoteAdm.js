import React,{useState} from 'react';
import styles from '../styles/components/CardAdoteAdm.module.css';
import PorteComponent from '../components/PorteComponent';
import Link from 'next/link';
import {FiEdit, FiTrash2} from 'react-icons/fi'
//import { toast, ToastContainer } from 'react-nextjs-toast'
import api from '../services/api'; 

export default function components({data}) {


  function checkGenero(){
    
    const gen = data.sexo;
    if(gen === 'Macho'){
      return(
        <img className={styles.imgGen} src="/generos/male.png"/>
      )
    }else{
      return(
        <img className={styles.imgGen} src="/generos/female.png"/>
      )
    }
  };
     
   
  


  async function deleteCard(){
    const id = data.id;
    const confirmDelete = confirm("Tem certeza que deseja excluir, cod: "+data.id)

    if(confirmDelete === true){
     const response = await api.delete(`adoption/${id}`);
     
      
      alert(response.data.menssage)
    }
     //NOTIFICAÇÂO LIB
    // toast.notify('This is a success toast', {
    //   duration: 5,
    //   type: "success"
    // })

      
   
  }

  function checkPorte(){
     
    const porte = data.porte;
    if(porte === 'Pequeno'){
      return(
        <div style={{display:'flex', flexDirection:'row', marginLeft:30, marginTop:20}}>
          <PorteComponent porte="P" active/>
          <PorteComponent porte="M" />
          <PorteComponent porte="G" />
        </div>
      )
    }
    if(porte === 'Médio'){
      return(
        <div style={{display:'flex', flexDirection:'row', marginLeft:30, marginTop:20}}>
          <PorteComponent porte="P" />
          <PorteComponent porte="M" active/>
          <PorteComponent porte="G" />
        </div>
      )
    }
    if(porte === 'Grande'){
      return(
        <div style={{display:'flex', flexDirection:'row', marginLeft:30, marginTop:20}}>
          <PorteComponent porte="P" />
          <PorteComponent porte="M" />
          <PorteComponent porte="G" active/>
        </div>
      )
    }    
  };


 return (
   
     <div  className={styles.container}>
      
      <img className={styles.image} src={data.images[0].url}/>

     <div className={styles.content}>
         
            <h4 className={styles.nameTitle}> {data.name} </h4>
            
     
        <div style={{display:'flex', flexDirection:'row'}}>
            <Link href={`/editlist/${data.id}`}>
             <FiEdit style={{color: '#40ff5c' }}/>
            </Link>
           
            <div onClick={deleteCard}>
              <FiTrash2 style={{color: '#ff2448' , marginTop:10, marginLeft:10}}/>
            </div>
        </div>
        
     </div> 
      
    <div className={styles.row}>

      
         <div className={styles.genero}>
              { checkGenero() }
        </div>
       
        
        <div className={styles.porte}>
          { checkPorte()} 
        </div>

        
      
    </div>
    

    </div>
   
  
 );
}
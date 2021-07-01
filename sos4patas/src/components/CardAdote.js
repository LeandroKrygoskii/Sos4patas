import React,{useState} from 'react';
import styles from '../styles/components/CardAdote.module.css';
import PorteComponent from '../components/PorteComponent';
import Link from 'next/link';


export default function components({data}) {


  function checkGenero(){
    
    const gen = data.sexo;
    console.log('genero ' + data.sexo)
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
  
   
   <Link href={`/adotelist/${data.id}`}>
     <div  className={styles.container}>
      
      <img className={styles.image} src={data.images[0].url}/>

     <div className={styles.content}>
        <h4 className={styles.nameTitle}> {data.name} </h4>
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
   </Link>
  
 );
}
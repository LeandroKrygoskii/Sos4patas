import React, {useState, useEffect} from 'react';

import styles from '../../styles/pages/Detail.module.css';
import api from '../../services/api';
import { useRouter } from 'next/router';
import PorteComponent from '../../components/PorteComponent';
import Link from 'next/link';
import { FcExpand } from 'react-icons/fc';


export default function Pages({animal}) {
  //console.log(animal);
  const [list, setList] = useState();
  //const [testis, setTestId] = useState(0);
  //console.log("dados" + animal);
  const [isFilled , setIsFilled] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  
  function changeState(){
    setIsFilled(!isFilled);
  }

   

   if(!animal){
     return <p>carregando...</p>
   }
 
  
 return (
   <div className={styles.container}>
        

              
        <div className={styles.content1}>
        
          <div className={styles.divImg}>
              <img className={styles.image} src={animal.images[activeImageIndex].url}/>

              <div className={styles.imagesList}>
                {animal.images.map((image, index) => {
                  return (
                    <button 
                    key={image.id} 
                    className={styles.active}
                    onClick={() => {
                        setActiveImageIndex(index)
                      }
                    } 
                    type="button">
                      <img className={styles.imgList} src={image.url} alt={animal.name} />
                    </button>
                  )
                })}
             </div>
          </div>
         
          
         


         <div className={styles.contentColumn}>
          <h1  className={styles.title}>Adote</h1>
            <div className={styles.divText}>
            
            <p className={styles.textContentTitle}>{`${animal.name}`}</p>
            <hr className={styles.row}/>
             <div className={styles.infoGerais}>
               <h4 className={styles.infoGeraisTitle}>Informações Gerais</h4>
                <div className={styles.rowInfo}>
                  <img src="/check1.png"/>
                  <p style={{marginLeft:15, fontSize:18,  color:'#000'}}>
                     Sexo: {animal.sexo}
                  </p>
                </div>

                <div className={styles.rowInfo}>
                  <img src="/check1.png"/>
                  <p style={{marginLeft:15, fontSize:18,  color:'#000'}}>
                     Porte: {animal .porte}
                  </p>
                </div>

             </div>
            
            <hr className={styles.row}/>

          <div className={styles.divDetails}>
             
            <h4 className={styles.textContent}>Mais Detalhes</h4>
            
            <div onClick={changeState} className={styles.hiddenDetail}> 
              <FcExpand />
             </div>
          </div>  

            { isFilled ?  
              <div className={styles.allContent}>
                  <div className={styles.aboutDiv}>
                    <h3 style={{color: '#9c00f7'}}>A História de {animal.name}</h3> 
                    <p style={{color: '#a1a1a1'}} className={styles.textAbout}>{animal.about}</p> 
                    
                  </div>
              </div>

              :
             null
               
            }

             
              <hr className={styles.row}/>
              
              <Link href={`/adote/${animal.id}`}>
                <button type='button' className={styles.divBtn}>

                  Quero Adotar

                </button>
              </Link>
            </div> 
          </div>
        </div>
   </div>
 );

 
}



export async function getStaticProps({ params }){
  //console.log(params.id)

  
  const res = await api.get(`/adoption/${params.id}`)
  const animal = res.data;
  
  return {
    props: {
      animal
    }
  }
}

export async function getStaticPaths(){
  
  const animals = await api.get(`/adoption`);

  
 
 
  const paths = animals.data.map((animal) => ({ //pra cada animal na resposta, um caminho sera gerado  
    params: {
      id: animal.id.toString(), //necessario usar o toString porque não aceita inteiro como caminho (path)
    },
  }));
  
  return {
    paths,
    fallback: false,
  };
}
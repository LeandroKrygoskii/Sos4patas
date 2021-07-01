import React, {useState, useEffect} from 'react';

import styles from '../../styles/pages/Detail.module.css';
import api from '../../services/api';
import { useRouter } from 'next/router';
import PorteComponent from '../../components/PorteComponent';
import Link from 'next/link';
import { FcExpand } from 'react-icons/fc';


export default function pages() {

  const [list, setList] = useState();
  //const [testis, setTestId] = useState(0);

  const [isFilled , setIsFilled] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  function changeState(){
    setIsFilled(!isFilled);
  }

  

  const {query} = useRouter();
   
  useEffect(() => {
    api.get(`adoption/${query.id}`).then(response => {
      setList(response.data)
    });
  },[query.id])
   
  
  async function getid() { 
    //setTestId(query.id);
    //console.log("esse id " + testis);

    //const res = await api.get(`adoption/${testis}`);
    
    //setList(res.data);  
  };


  if(!list){
    return <p>Carregando...</p>
  }

 
  
 return (
   <div className={styles.container}>
        

              {/* <button style={{width: 30, height:40}} type='button' onClick={() => getid()}></button> */}
        <div className={styles.content1}>
        
          <div className={styles.divImg}>
              <img className={styles.image} src={list.images[activeImageIndex].url}/>

              <div className={styles.imagesList}>
                {list.images.map((image, index) => {
                  return (
                    <button 
                    key={image.id} 
                    className={styles.active}
                    onClick={() => {
                        setActiveImageIndex(index)
                      }
                    } 
                    type="button">
                      <img className={styles.imgList} src={image.url} alt={list.name} />
                    </button>
                  )
                })}
             </div>
          </div>
         
          
         


         <div className={styles.contentColumn}>
          <h1  className={styles.title}>Adote</h1>
            <div className={styles.divText}>
            
            <p className={styles.textContentTitle}>{`${list.name}`}</p>
            <hr className={styles.row}/>
             <div className={styles.infoGerais}>
               <h4 className={styles.infoGeraisTitle}>Informações Gerais</h4>
                <div className={styles.rowInfo}>
                  <img src="/check1.png"/>
                  <p style={{marginLeft:15, fontSize:18,  color:'#000'}}>
                     Sexo: {list.sexo}
                  </p>
                </div>

                <div className={styles.rowInfo}>
                  <img src="/check1.png"/>
                  <p style={{marginLeft:15, fontSize:18,  color:'#000'}}>
                     Porte: {list.porte}
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
                    <h3 style={{color: '#9c00f7'}}>A História de {list.name}</h3> 
                    <p style={{color: '#a1a1a1'}} className={styles.textAbout}>{list.about}</p> 
                    
                  </div>
              </div>

              :
             null
               
            }

             
              <hr className={styles.row}/>
              
              <Link href={`/adote/${list.id}`}>
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
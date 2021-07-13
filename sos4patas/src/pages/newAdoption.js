import React, { useState, useEffect } from 'react';
import styles from '../styles/pages/CadAdoption.module.css';
import { FiPlus } from "react-icons/fi";
import api from '../services/api';
import Router from 'next/router';
import { parseCookies } from 'nookies';

export default function pages() {

   
  const [name , setName] = useState();
  const [sexo, setSexo] = useState();
  const [previewImages, setPreviewImages] = useState([]);
  const [porte, setPorte] = useState();
  const [images, setImages] = useState([]);
  const [about, setAbout] = useState();


  function handleSelectImage(event) {
    if (!event.target.files) return

    const selectedImages = Array.from(event.target.files)
    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image => URL.createObjectURL(image))

    setPreviewImages(selectedImagesPreview)
  }
  

  async function handleSubmit (e) {

    e.preventDefault();
     
    const data = new FormData();
    
    data.append('name' , name)
    data.append('about', about)
    data.append('sexo' , sexo)
    data.append('porte' , porte)
    Array.from(images).forEach(image => {
      data.append('images', image)
    });

    console.log(name, about, sexo, porte);
      
    const req = await api.post('/create_adoption', data)
    
    console.log(req)
   alert('cadastro realizado com sucesso');

   Router.push('/dashboard')
    
  }
 
  return (
   <div className={styles.container}>
      <main className={styles.main}>
      <form className={styles.newAdoption} onSubmit={handleSubmit}>
                 
                 <fieldset style={{border:0, marginBottom: 30}}>
                     <legend className={styles.legend}>Cadastrar uma nova Adoção</legend>

           <div className={styles.inputBlock}>
              <label htmlFor="images">Fotos</label>

              <div className={styles.imagesContainer}>
                {previewImages.map(image => <img className={styles.image} key={image} src={image} alt={image} />)}
                <label htmlFor="image[]" className={styles.newImage}>
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input multiple onChange={handleSelectImage} type="file" id="image[]"/>

            </div>
                 
                 
                 <div className={styles.inputBlock}>
                     <label className={styles.inputLabel} htmlFor="name">Nome</label>
                     <input    
                      id="name"
                      value={name}
                      onChange={t => setName(t.target.value)}
                     />
                 </div>

                 <div className={styles.inputBlock}>
                    <label  className={styles.inputLabel} htmlFor="about">Conte a história do amiguinho(a) <span>Máximo de 300 caracteres</span></label>
                    <textarea className={styles.textArea} 
                    id="about" 
                    maxLength={300} 
                    value={about} 
                    onChange={event => setAbout(event.target.value)} />
                 </div>




                 <legend style={{marginTop:70}} className={styles.legend}>Sexo</legend>
                 <div className={styles.inputBlock}>
                    

                    <div className={styles.divSexo}>
                       <div className={styles.divSexoMacho}>
                        <input 
                          type="checkbox"
                          id="sexo"
                          value={sexo}
                          onChange={() => setSexo("Macho")}
                        />
                          <span className={styles.sexoSpan}>Macho</span>
                       </div>

                       <div className={styles.divSexoFemea}>
                        <input 
                          type="checkbox"
                          id="sexo"
                          value={sexo}
                          onChange={() => setSexo("Fêmea")}
                        />
                          <span className={styles.sexoSpan}>Fêmea</span>
                       </div>
                    </div> 
                     
                 </div>

                 <legend style={{marginTop:70}} className={styles.legend}>Porte</legend>

                 <div className={styles.inputBlock}>
                    

                    <div className={styles.divSexo}>
                       <div className={styles.divSexoMacho}>
                        <input 
                          type="checkbox"
                          id="porte"
                          value={porte}
                          onChange={() => setPorte("Grande")}
                        />
                          <span className={styles.sexoSpan}>Grande</span>
                       </div>

                       <div className={styles.divSexoFemea}>
                        <input 
                          type="checkbox"
                          id="porte"
                          value={porte}
                          onChange={() => setPorte("Médio")}
                        />
                          <span className={styles.sexoSpan}>Médio</span>
                       </div>

                       <div className={styles.divSexoFemea}>
                        <input 
                          type="checkbox"
                          id="porte"
                          value={porte}
                          onChange={() => setPorte("Pequeno")}
                        />
                          <span className={styles.sexoSpan}>Pequeno</span>
                       </div>
                     </div>
                    </div> 
                  
             </fieldset>

              <div className={styles.confirmButtonDiv}>
                <button className={styles.confirmButton} type="submit">
                        Confirmar
                    </button>
              </div>
               
            </form>
      </main>
   </div>
 );
}

export const getServerSideProps = async (ctx) => {

  const { ['nextauth.token']:token } = parseCookies(ctx);

  if(!token){
    return{
      redirect:{
        destination: '/sign',
        permanent: false
      }
    }
  }

  return{
    props:{
      
    }
  }

}
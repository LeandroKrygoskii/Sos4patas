import React, {useState , FormEvent} from 'react';
import styles from '../styles/pages/Denuncias.module.css';
import api from '../services/api';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function adote(){
     
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');





    async function handleSubmit(event) {
        event.preventDefault();
        if(title && email && about != ''){
            

            const data = new FormData();
    
            data.append('title' , title);
            data.append('email', email);
            data.append('about', about);
    
            await api.post('/denuncias' , data)
    
            
           alert('Sucesso!')
           router.push('/')
           
        }
        else{
            alert('Por Favor preencha todos os campos')
        }
    }

    

    return(
        <div className={styles.container}>
          
          
         <div className={styles.content1}>
             <div className={styles.headerContent}>

                <div className={styles.containerContent1}>
                 <div className={styles.contentText}>
                    <h1 className={styles.title}>Denuncias</h1>
                    <p className={styles.txt1}>Caso você presencie maus-tratos a animais de quaisquer espécies, sejam domésticos, domesticados, silvestres ou exóticos – como abandono, envenenamento, presos constantemente em correntes ou cordas muito curtas, manutenção em lugar anti-higiênico, mutilação, presos em espaço incompatível ao porte do animal ou em local sem iluminação e ventilação, utilização em shows que possam lhes causar lesão, pânico ou estresse, agressão física, exposição a esforço excessivo e animais debilitados (tração), rinhas, etc. <strong>Denuncie!</strong></p>
                 </div>
                 <div className={styles.divImg}>
                        <img style={{borderRadius:10}} className={styles.image} src="/dogs/cachorro4.jpg" alt="imgdg"/>
                    </div>
                </div> 
                 <hr className={styles.line}/>
                <div className={styles.containerContent2}>
                 <div className={styles.contentText2}>
                    <h1 className={styles.title}>Lei de Crimes Ambientais</h1>
                    <p className={styles.txt2}>
                        “Art. 32. Praticar ato de abuso, maus-tratos, ferir ou mutilar animais silvestres, domésticos ou domesticados, nativos ou exóticos:
                        <br/>
                        Pena - detenção, de três meses a um ano, e multa.
                        <br/>
                        § 1º. Incorre nas mesmas penas quem realiza experiência dolorosa ou cruel em animal vivo, ainda que para fins didáticos ou científicos, quando existirem recursos alternativos.
                        <br/>
                        § 2º. “A pena é aumentada de um sexto a um terço, se ocorre morte do animal.”</p>
                 </div>
                 <div className={styles.divImg}>
                        <img className={styles.image} src="/dogs/11.png" alt="imgdg"/>
                 </div>
                </div> 
             </div>
             
           <main  className={styles.main}>
             <div className={styles.header}>
               <div className={styles.cartTitle}>
                 <h1 className={styles.title2}>Denuncie</h1>
               </div>
                <h4>Para denunciar você pode ligar diretamente para </h4>
                <h1> <strong>(041)98729-2170</strong></h1>
             </div>   

             <br/>
             <br/>

            <div className={styles.formDiv}>
            <h5 className={styles.subTitle}>Se preferir</h5>    
                <h3 className={styles.subTitle}>Preencha o formulário e alguêm da equipe irá entrar em contato</h3>
            <form className={styles.newAdoption} onSubmit={handleSubmit}>
                 
                 <fieldset style={{border:0, marginBottom: 30}}>
                     <legend className={styles.legend}>Dados para Denuncias</legend>
                 
                 
                 <div className={styles.inputBlock}>
                     <label className={styles.inputLabel} htmlFor="title">Titulo da denuncia</label>
                     <input
                       
                      id="title"
                      value={title}
                      onChange={t => setTitle(t.target.value)}
                     />
                 </div>

                 <div className={styles.inputBlock}>
                     <label className={styles.inputLabel}  htmlFor="email">Email</label>
                     <input 
                      
                      id="email"
                      value={email}
                      onChange={t => setEmail(t.target.value)}
                     />
                 </div>

                 <div className={styles.inputBlock}>
                    <label  className={styles.inputLabel} htmlFor="about">Escreva sobre a denuncia</label>
                    <textarea className={styles.textArea} 
                    id="about" 
                    value={about} 
                    onChange={event => setAbout(event.target.value)} />
                 </div>
             </fieldset>

              <div className={styles.confirmButtonDiv}>
                <button className={styles.confirmButton} type="submit">
                        Confirmar
                </button>
              </div>
               
            </form>
            </div>
          </main> 
          </div>
        </div>
    )

}
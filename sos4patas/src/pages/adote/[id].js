import React, {useState , FormEvent} from 'react';
import styles from '../../styles/pages/NewAdocao.module.css';
import api from '../../services/api';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function adote(){
     
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');





    async function handleSubmit(event) {
        event.preventDefault();
        if(name && email && telefone != ''){
            

            const data = new FormData();
    
            data.append('name' , name);
            data.append('email', email);
            data.append('telefone', telefone);
    
            await api.post('/req_adoption' , data)
    
            
           alert('Sucesso!')
           router.push('/')
           
        }
        else{
            alert('Por Favor preencha todos os campos')
        }
        

    }

    return(
        <div className={styles.container}>
           <main className={styles.main}>

           <div className={styles.header}>
                <h1 className={styles.title}>Quase lá 😃</h1>
                <h2 style={{color: '#1a75bf'}}>Para adotar você pode ligar para (041)98729-2170</h2>
                <h4 style={{color: '#1a75bf'}}>Ou mandar um email diretamente para: sos4patasadocoes@gmail.com</h4>
                <br/>
                <br/>
                <h5 className={styles.subTitle}>Se preferir</h5>    
                <h3 className={styles.subTitle}>Preencha o formulário e alguêm da equipe irá entrar em contato</h3>
            </div>    
            


            <form className={styles.newAdoption} onSubmit={handleSubmit}>
                 
                 <fieldset style={{border:0, marginBottom: 30}}>
                     <legend className={styles.legend}>Dados para contato</legend>
                 
                 
                 <div className={styles.inputBlock}>
                     <label className={styles.inputLabel} htmlFor="name">Nome</label>
                     <input
                       
                      id="name"
                      value={name}
                      onChange={t => setName(t.target.value)}
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
                     <label className={styles.inputLabel}  htmlFor="telefone">Telefone</label>
                     <input 
                      
                      id="telefone"
                      value={telefone}
                      onChange={t => setTelefone(t.target.value)}
                     />
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
    )

}
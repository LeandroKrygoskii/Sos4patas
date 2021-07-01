import React, {useState, useContext} from 'react';
import styles from '../styles/pages/Sign.module.css';
import api from '../services/api';
import { AuthContext } from '../context/Authcontext';


export default function pages() {
     
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
   
  const {user ,isAuth , signIn } = useContext(AuthContext);
  
  
    

  async function handleSignIn(e){
       
     e.preventDefault();
    
    await signIn({name: userName, password: pass})
 
   

  }


 return (
   <div className={styles.container}>

    <main className={styles.main}>
      <div className={styles.containerItem1}>
      
            <form onSubmit={handleSignIn}>
              <fieldset style={{border:0}}>
                <div className={styles.inputBlock}>
                <label className={styles.inputLabel}  htmlFor="user">Usuário</label>
                <input
               
                 id="user"
                 value={userName}
                 onChange={t => setUserName(t.target.value)}
                />

                </div>

                <div className={styles.inputBlock}>
                  <label className={styles.inputLabel}  htmlFor="password">Senha</label>
                  <input
                  
                   id="password"
                   value={pass}
                   onChange={t => setPass(t.target.value)}
                   type="password"
                   />

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
 );
}
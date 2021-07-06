import React from 'react';
import styles from '../styles/About.module.css';


export default function pages() {
 return (
   <div className={styles.container}>
    
    <div className={styles.divImg}>
           <img className={styles.image} src="/logodog.png"/>
    </div>



     <div className={styles.contentAll}>
         <h1 className={styles.title}>SOS 4 Patas Campo Largo</h1>

         <div className={styles.hideen}>
           <img className={styles.imageHideen} src="/logodog.png"/>
          </div>
          

         <div className={styles.divContent}>
           <p className={styles.content}>
                O projeto SOS 4 Patas nasceu há 9 (nove) anos atrás, na Cidade de Campo Largo/PR, e foi idealizado pela Mariane Mazzon, a qual reuniu pessoas que sempre foram apaixonadas pela causa animal e começaram a atuar em resgates de animais que se encontravam em estado de abandono, acidentados ou em maus-tratos, cuidando e mantendo-os em condições saudáveis e direcionando para adoções.
                <br/>
                <br/>
                Com o crescimento do projeto e com o intuito de proporcionar maior credibilidade e transparência para nossos seguidores, formalizamos e criamos o Instituto SOS 4 Patas Paraná. Hoje nosso Instituto é uma Pessoa Jurídica de Direito Privado sem fins lucrativos, tendo ainda como sede e foro o Município de Campo Largo/PR.
                <br/>
                <br/>
                Temos como atividade a associação de defesa de direitos sociais e nosso objetivo é resgatar animais que se encontram em estado de abandono, acidentados ou em maus-tratos, cuidar dos mesmos, mantê-los em condições saudáveis, e encaminhar para adoção, sempre respeitando as possibilidades físicas e financeiras do Instituto.
                <br/>
                <br/>
                Hoje contamos com uma equipe interna de apoio e atuação de profissionais voluntários de diversas áreas, além de patrocinadores que confiam em nosso proposito e instituição.
                Além disso, atuamos com toda a transparência perante a sociedade e aproximadamente 500.000 (quinhentos mil) seguidores somando em todas as redes sociais, além de inúmeros doadores que nos ajudam permanentemente ou ocasionalmente.
           </p>
         </div>
      </div>
   </div>
 );
}
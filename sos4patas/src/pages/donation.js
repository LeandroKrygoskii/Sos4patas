import React from 'react';
import styles from '../styles/pages/Donation.module.css';
import Link from 'next/link';
import ShowDonationComponent from '../components/ShowDotnationComponent';

export default function pages() {
 return (


   <div className={styles.container}>
       <h1 className={styles.title}>
            Para continuar nosso trabalho, precisamos da sua ajuda ❤ <br/> <br/>
            Você pode ajudar enviando suas doações pelos seguintes canais: 
       </h1>
 
    <div className={styles.content1}>
         <ShowDonationComponent 
            img="/logopix.png"
            title="PIX"
            content="40.911.164/0001-95"
         />

         <ShowDonationComponent 
            img="/bradescoicon.png"
            title="BANCO BRADESCO"
            content="
            AG 1886 
            CONTA CORRENTE 49916-1
            CNPJ 40.911.164/0001-95"
            href="https://banco.bradesco/html/classic/produtos-servicos/mais-produtos-servicos/transferencias-saques-e-depositos.shtm"
         />

        <ShowDonationComponent 
         img="/picpay.png"
         title="PICPAY"
         content="@sos4patasparana"
         href="https://picpay.com/site"
       />
    </div>

    <div className={styles.content2}>

    <ShowDonationComponent 
            img="/paypal.png"
            title="PAYPAL"
            content="Email:
             financeiro@institutosos4patasparana.org"
             href="https://www.paypal.com/br/home"
         />

         <ShowDonationComponent 
            img="/logoVaquinha.png"
            title="Vakinha online"
            content="
            para doar com cartão de crédito ou boleto"
            href="https://vaka.me/1975160"
         />

        <ShowDonationComponent 
         img="/padrim.png"
         title="Padrinho mensal "
         content="se torne um padrinho mensal "
         href="https://www.padrim.com.br/sos4patascampolargo"
       />

     </div>
  
</div>


 );
}
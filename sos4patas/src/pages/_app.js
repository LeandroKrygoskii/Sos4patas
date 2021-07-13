import React,{useEffect, useState} from 'react';
import '../styles/global.css'
import Nprogress from 'nprogress';
import Router, {useRouter} from 'next/router';
import NavBarComponent from '../components/NavBarComponent';
import BgImgcomponents from '../components/BgImgComponent';
import {AuthProvider} from '../context/Authcontext';
import Head from 'next/head';

import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

//inicia o nprogess quando um evento de change route for disparado
Router.events.on("routeChangeStart" , (url) =>{
  console.log(`Loading : ${url}`)
  Nprogress.start();
});

//done termina o nprogress
Router.events.on("routeChangeComplete" , () => Nprogress.done());
Router.events.on("routeChangeError" , () => Nprogress.done());


function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const { pathname } = router;
  const noNav = ['/sign', '/dashboard', '/newAdoption', '/listAdoption', '/listDenuncias', '/listRequestAdoption']
  const admBar = ['/newAdoption', '/listAdoption', '/listDenuncias', '/listRequestAdoption']
  const noBgImg = ['/adote', '/adote/[id]', '/denuncias'];


  const [blackHeader , setBlackHeader] = useState();

  useEffect(() => {
    const scrollListern = () => {
      if(window.scrollY> 10){
        setBlackHeader(true);
      }
      else{
        setBlackHeader(false);
      }

      window.addEventListener('scroll', scrollListern);
      return()=>{
        window.removeEventListener('scroll', scrollListern);
      }
    }
    scrollListern();
  } ,[])


  return (
    <>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> 
      <AuthProvider>
          {noNav.includes(pathname) ? null : <NavBarComponent black={blackHeader}/>}
          {admBar.includes(pathname) ? <SideBar/> : null }
          {noBgImg.includes(pathname) ? null : <BgImgcomponents/> }
          
          <Component {...pageProps}/>
      </AuthProvider>
   </>
  )
 
  
}

export default MyApp

import '../styles/global.css'
import Nprogress from 'nprogress';
import Router, {useRouter} from 'next/router';
import NavBarComponent from '../components/NavBarComponent';
import BgImgcomponents from '../components/BgImgComponent';
import {AuthProvider} from '../context/Authcontext';

import SideBar from '../components/SideBar';

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

  return (
   <AuthProvider>
      {noNav.includes(pathname) ? null : <NavBarComponent/>}
      {admBar.includes(pathname) ? <SideBar/> : null }
      
      <Component {...pageProps}/>
      <BgImgcomponents/>
   </AuthProvider>
  )
 
  
}

export default MyApp

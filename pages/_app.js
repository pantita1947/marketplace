import '../styles/globals.css'
import Head from "next/head";
import Script from "next/script";
import Navbar from '../components/navbar';
//import 'bootstrap/dist/css/bootstrap.css';
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime"
const supportedChainIds = [1,4];
const connectors = {
  injected: {}
}
function MyApp({ Component, pageProps }) {
  return (  
    <>
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
        
      />
      <Navbar/>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
      
    </>
    
  );
}
export default MyApp;
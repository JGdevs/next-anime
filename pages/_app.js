import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {

  return (

    <>

      <NextNProgress color='#fff'/>
      <Component {...pageProps}/>

    </>

  )

}

export default MyApp

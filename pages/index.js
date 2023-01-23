import Head from 'next/head'
import Image from 'next/image'
import Header from '/components/Header';
import styles from '../styles/Home.module.css'
import WelcomeSection from '/components/WelcomeSection';
import HeroImage from '/components/HeroImage';
import home from '/data/home.json';

export default function Home() {

  return (

    <>

      <Head>
        <title>Next-Anime</title>
        <meta name="description" content="La mejor pagina web para ver anime online"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>

      <div className={styles.homepage}>

        <WelcomeSection/>
      
        {home.heroImages.map((value,i) => <HeroImage key={i} pos={i + 1} {...value}/>)}

      </div>

    </>

  )

}

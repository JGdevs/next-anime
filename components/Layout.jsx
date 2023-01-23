import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children,title,description}) => {

	return (

		<>
			
			<Head>
        <title>{`${title} - Next-Anime`}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

			<Header color={'#161616'}/>

			<main>
				
				{children}

			</main>

			<Footer/>

		</>

	)

} 

export default Layout;
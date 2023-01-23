import {useRef} from 'react';
import styles from '../styles/HeroImage.module.css';
import stylesForm from '../styles/searchForm.module.css';
import {getAnimeSearch} from '../services/animes.js';
import {useRouter} from 'next/router';

const WelcomeSection = () => {

	const inputRef = useRef(),

	router = useRouter();

	function searchAnime (e) {

		e.preventDefault();

		router.push(`/search?q=${inputRef.current.value}`)

	}

	return (

		<section className={styles[`bg-0`]} data-color={0}>

			<article className={styles[`bg-hero`]}>
				
				<h2 className={styles.h2}>Free entertainment all the animes you want you can find it here</h2>

				<form className={stylesForm.form} onSubmit={searchAnime}>
					
					<input className={stylesForm.text} type="text" required ref={inputRef}/>
					<button className={stylesForm.submit} type="submit">Buscar</button>

				</form>

			</article>

		</section>

	)

}

export default WelcomeSection;

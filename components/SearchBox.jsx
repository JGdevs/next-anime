import {useRef} from 'react';
import {useRouter} from 'next/router';
import styles from '/styles/searchBox.module.css';

const SearchBox = () => {

	const router = useRouter(),

	inputRef = useRef();

	function searchAnimeAgain (e) {

		e.preventDefault();

		router.push(`/search?q=${inputRef.current.value}`)

	}

	return (

		<article className={styles.containerForm}>
				
			<form className={styles.form} onSubmit={searchAnimeAgain}>
				
				<input className={styles.text} type="text" placeholder="search" required ref={inputRef}/>
				<button className={styles.submit} type="submit">Search</button>

			</form>

		</article>

	)

}

export default SearchBox;
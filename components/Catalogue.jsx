import styles from 'styles/Catalogue.module.css';
import Card from './Card';

const Catalogue = ({animes}) => {

	return (

		<div className={styles.catalogue}>

			<section className={styles.grid}>
			
				{ 

					animes.map((anime,i) => {

						return (

							<Card 

								key={i} 
								i={i}
								id={anime.mal_id}
								genre={anime.genres[0]?.name} 
								img={anime.images.webp.image_url} 
								title={anime.title}

							/>

						)

					})

				}

			</section>

		</div>

	);

}

export default Catalogue;
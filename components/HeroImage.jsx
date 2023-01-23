import Link from 'next/link';
import styles from '../styles/HeroImage.module.css';

const HeroImage = ({title,paragraph,link,pos}) => {

	return (

		<section className={styles[`bg-${pos}`]} data-color={pos}>
					
			<div className={styles[`bg-hero`]}>

				<h2 className={styles.h2}>{title}</h2>

				<p className={styles.p}>

					{paragraph}

				</p>

				<Link className={`${styles.btn} ${styles[`btn${pos}`]}`} href={`/${link}`}>{link}</Link>

			</div>

		</section>

	);

}

export default HeroImage;
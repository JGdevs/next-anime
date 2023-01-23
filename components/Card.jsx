import Image from 'next/legacy/image'
import styles from '../styles/Card.module.css';
import Link from 'next/link'

const Card = ({i,id,genre,img,title}) => {

	const blur = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8C/8DwAC2AHBPXJW0QAAAABJRU5ErkJggg==';

	return (

		<Link href={`/anime/${id}`}>

			<article>
				
				<div>
					
					<Image

					 style={{borderRadius:'.3rem',transform:'translateZ(0)'}}
					 src={img} 
					 height={337} 
					 width={225} 
					 alt={title}
					 layout='responsive'
					 priority={i <= 3}
					 quality={100}
					 placeholder='blur'
					 blurDataURL={blur}

					/>

				</div>

				<h4 className={styles.title}>{title}</h4>

				<span className={styles.genre}>{genre}</span>

			</article>

		</Link>

	)

}

export default Card; 
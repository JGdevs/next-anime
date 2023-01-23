import Link from 'next/link';
import styles from '/styles/Serie.module.css';

const Video = ({url,data,defaultImage}) => {

	const style = {

		backgroundImage:`url(${data.images.jpg.image_url || defaultImage})`   

	}

	return (

		<Link href={url}>
			
			<div className={styles.videoContainer} style={style}>

				<div className={styles.videoContent}>
					
					<i className={`bi-play-fill fs-1 ${styles.videoIcon}`}></i>

				</div>	

			</div>

			<p className={`fs--2 mr-tp ${styles.videoText}`}>{data.title}</p>

		</Link>

	)

}

export default Video;
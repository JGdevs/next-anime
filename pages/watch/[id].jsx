import Layout from 'components/Layout';
import {getVideoCaps} from '/services/episodes';
import ReactHlsPlayer from "@ducanh2912/react-hls-player";
import styles from '/styles/WatchVideo.module.css';

export default function watchAnime ({id,caps}) {

	let title = id.replaceAll('-',' ');

	return (

		<Layout title={`Watch ${title}`}>
			
			<section className="after-header">
				
				<h2 className="text-center fs-1 mr-bt-3">{title}</h2>

				<div className={styles.container}>
					
					<ReactHlsPlayer
				    src={caps.sources_bk[0].file}
				    autoPlay={false}
				    controls={true}
  				/>

				</div>

			</section>

		</Layout>

	)

}

export async function getServerSideProps (context) {

	const id = context.params.id,

	caps = await getVideoCaps(id);

	return {

    props: {


    	id,
      caps
     
    }

  }

}


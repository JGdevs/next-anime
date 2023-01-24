import {Suspense} from 'react';
import Layout from 'components/Layout';
import Image from 'next/legacy/image';
import styles from '/styles/Serie.module.css';
import {getAnime} from '/services/animes';
import {getColors} from '/services/colors';
import textColor from '/utils/lightOrDark';
import AsideMenu from '/components/AsideMenu';
import {getAnimeCaps} from '/services/animes';
import Video from '/components/Video';
import createVideoURL from '/utils/createVideoURL';

export default function Serie ({info,colors,caps}) {

	const blur = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8C/8DwAC2AHBPXJW0QAAAABJRU5ErkJggg==';

	const duration = info.duration.substring(0,6);

	const style = {

		color:textColor(colors.alternativeColor),
		backgroundColor:`${colors.alternativeColor}`,
		border:`1px solid ${colors.alternativeColor}`

	},

	btnColor = {

		backgroundColor:colors.color,
		color:textColor(colors.color)

	}

	function buildDescription(title,description) {

		let desc = `Watch ${title} here ${description}`;
		return desc.substring(0,151);
	}

	return (

		<Layout title={info.title} description={buildDescription(info.title)}>
			
			<section className={styles.container}>

				<AsideMenu/>
				
				<article className={styles.card} style={style}>
					
					<div className={styles.img}>
						
						<Image

						 style={{borderRadius:'.3rem'}}
						 src={info.images.webp.large_image_url} 
						 alt={info.title}
						 width={424}
						 height={600}
						 layout='responsive'
						 priority={true}
						 quality={100}
						 placeholder='blur'
						 blurDataURL={blur}

						/>

					</div>

					<div className={styles.info}>

						<h2 className="fs-2">{info.title}</h2>

						<div className={styles.misc}>

							<div>
								
								<span className="fs--2">Status</span>
								<span className="mr-tp fs--3">

									{(info.airing) ? 'emision' : 'Finished'}

								</span>

							</div>

							<div>
								
								<span className="fs--2">Score</span>
								<span className="mr-tp fs--3">{info.score}</span>

							</div>

							<div>
								
								<span className="fs--2">Release</span>
								<span className="mr-tp fs--3">{info.year}</span>

							</div>

							<div>
								
								<span className="fs--2">Episodes</span>
								<span className="mr-tp fs--3">{info.episodes}</span>

							</div>


							<div>
								
								<span className="fs--2">Duration</span>
								<span className="mr-tp fs--3">{duration}</span>

							</div>

						</div>

						<div className={styles.tags}>
							
							{info.genres.map(({name}) => <span className={styles.tag} style={btnColor} key={name}>{name}</span>)}
							{info.themes.map(({name}) => <span className={styles.tag} style={btnColor} key={name}>{name}</span>)}
							{info.explicit_genres.map(({name}) => <span className={styles.tag} style={btnColor} key={name}>{name}</span>)}


						</div>

						<p className={styles.description}>
							
							{info.synopsis}

						</p>

					</div>

				</article>

			</section>

			<Suspense fallback={<p>Loading...</p>}>
				
				<section className="mr-tp-s pd-tp-3 bg-light-dark">
				
					<p className="text-center fs-1">Episodes</p>

					{(caps.length > 0) 

					? 

					<div className={styles.caps}>
						
						{caps && caps.map((cap,i) => {

							const url = createVideoURL(info.title,cap.episode);

							return <Video defaultImage={info.images.webp.image_url} key={i} url={`/watch/${url}`} data={cap}/>

						})}

					</div>


					: 

					<div className={styles.nothingCaps}>
						
						<i className="fs-4 bi-camera-reels-fill"></i>
						<p className="pd-lf-2 pd-rg-2 fs--2">lo sentimos ahora mismo esta serie no tiene capitulos</p>

					</div>

					}

				</section>

			</Suspense>

		</Layout>

 	)

}

export async function getServerSideProps (context) {

	const id = context.params.id,

	{data} = await getAnime(id),

	colors = await getColors(data.images.jpg.small_image_url),

	{data:caps} = await getAnimeCaps(id);

	return {

    props: {

      info:data,
      colors,
     	caps
     
    },

  }

}
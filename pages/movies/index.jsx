import Catalogue from 'components/Catalogue';
import Layout from 'components/Layout';
import {getMovies} from 'services/animes';
import Pagination from 'components/Pagination';
import genres from '/data/genres.json';
import Select from 'components/Select';
import FilterButton from 'components/FilterButton';
import PageLayout from 'components/PageLayout';

export default function Movies ({animes,pagination}) {

	const onPageChange = () => {

		return null;

	}

	const pageProps = {

    onPageChange,
    totalCount:pagination.items.total,
    siblingCount:2,
    currentPage:pagination.current_page,
    pageSize:pagination.items.per_page

  }

	return (

		<Layout title="Peliculas" description="Akira,kimi no nawa,el viaje de chihiro y mas, puedes verlas tambien aca">

			<PageLayout title="Peliculas">
				
				<div className="select-container">

					<Select title="genres" options={genres.genres}/>

					<FilterButton/>

				</div>	

				<Catalogue animes={animes}/>

			</PageLayout>

			<Pagination path={'peliculas'} {...pageProps}/>

		</Layout>	

	)

}

export async function getServerSideProps (context) {

	const {query} = context,

	{page} = query,

	params = new URLSearchParams(query).toString(),

	res = await getMovies(params,page);

  return {

    props: {

      animes:res.data,
      pagination:res.pagination

    },

  }

}


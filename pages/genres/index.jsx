import {useRouter} from 'next/router';
import Catalogue from 'components/Catalogue';
import Layout from 'components/Layout';
import {getGenres} from 'services/animes';
import Pagination from 'components/Pagination';
import Select from 'components/Select';
import FilterButton from 'components/FilterButton';
import genres from '/data/genres.json';
import PageLayout from 'components/PageLayout';

export default function Generos ({animes,pagination}) {

	const onPageChange = () => {

		return null;

	}

	const pageProps = {

    onPageChange,
    totalCount:pagination.items.total,
    siblingCount:1,
    currentPage:pagination.current_page,
    pageSize:pagination.items.per_page

  }

	return (

		<Layout title="Generos" description="accion,romance, drama, todos los generos, entra en esta seccion y encuentra lo que estas buscando">

			<PageLayout title="Generos">
				
				<div className="select-container">

					<Select title="genres" options={genres.genres}/>

					<FilterButton/>

				</div>

				<Catalogue animes={animes}/>

			</PageLayout>

      <Pagination path={'generos'} {...pageProps}/>

		</Layout>	

	)

}

export async function getServerSideProps (context) {

	const {query} = context,

	{page} = query,

	params = new URLSearchParams(query).toString(), 

	res = await getGenres(params,page);

  return {

    props: {

      animes:res.data,
      pagination:res.pagination

    },

  }

}
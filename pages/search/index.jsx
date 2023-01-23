import Catalogue from 'components/Catalogue';
import Layout from 'components/Layout';
import {searchAnime} from 'services/animes';
import Pagination from 'components/Pagination';
import FilterButton from '/components/FilterButton';
import Select from 'components/Select';
import status from '/data/status.json';
import genres from '/data/genres.json';
import types from '/data/types.json';
import PageLayout from '/components/PageLayout';
import SearchBox from 'components/SearchBox';

export default function searchResults ({animes,pagination,query}) {

	const onPageChange = () => {

		return null;

	},

	pageProps = {

		onPageChange,
    totalCount:pagination.items.total,
    siblingCount:1,
    currentPage:pagination.current_page,
    pageSize:pagination.items.per_page


	}

	return (

		<Layout color="#111111" title="Search" description="Encuentra lo que quieras en nuestra seccion de busquedas personalizadas">

			<SearchBox/>

			<PageLayout title={`Results for ${query}`}>
				
				<div className="select-container">

					<Select title="status" options={status.status} onlyValue={true}/>

					<Select title="type" options={types.types} onlyValue={true}/>

					<Select title="genres" options={genres.genres}/>

					<FilterButton/>

				</div>

				<Catalogue animes={animes}/>

			</PageLayout>

			<Pagination pathname="search" {...pageProps}/>

		</Layout>

	)

}

export async function getServerSideProps (context) {

	const {query} = context,

	{page} = query,

	params = new URLSearchParams(query).toString(),

	res = await searchAnime(params,page);

	return {

		props: {

			animes:res.data,
			pagination:res.pagination

		}

	}

}
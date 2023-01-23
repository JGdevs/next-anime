import Catalogue from 'components/Catalogue';
import Layout from 'components/Layout';
import PageLayout from 'components/PageLayout';
import {getHentai} from 'services/animes';
import Pagination from 'components/Pagination';
import SearchBox from 'components/SearchBox';

export default function Hentai ({animes,pagination}) {

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

		<Layout title="Hentai" description="explora en nuestro catalogo tambien una variada seleccion de hentai">

			<SearchBox/>

			<PageLayout title="Hentai">
				
				<Catalogue animes={animes}/>

			</PageLayout>

			<Pagination path={'hentai'} {...pageProps}/>

		</Layout>	

	)

}

export async function getServerSideProps (context) {

	const {query} = context,

	res = await getHentai(query.page);

  return {

    props: {

      animes:res.data,
      pagination:res.pagination,

    },

  }

}

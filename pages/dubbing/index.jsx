import Catalogue from 'components/Catalogue';
import Layout from 'components/Layout';
import {getTranslate} from 'services/animes';
import Pagination from 'components/Pagination';

export default function Doblaje ({animes,pagination}) {

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

		<Layout title="Dubbing" description="Entra a nuestra seccion de animes con doblaje original">

			<Catalogue animes={animes}/>

      <Pagination path={'doblaje'} {...pageProps}/>

		</Layout>	

	)

}

export async function getServerSideProps (context) {

	const {query} = context,

	res = await getTranslate(query.page);

  return {

    props: {

      animes:res.data,
      pagination:res.pagination

    },

  }

}
import Catalogue from 'components/Catalogue';
import Layout from 'components/Layout';
import {getPopulars} from 'services/animes';
import Pagination from 'components/Pagination';
import PageLayout from 'components/PageLayout';

export default function Populares ({animes,pagination}) {

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

		<Layout title="Populares" description="hechale un vistazo a lo mas populares para ver lo que es tendencia">

			<PageLayout title="Populares">
				
				<Catalogue animes={animes}/>

			</PageLayout>

      <Pagination path={`populares`} {...pageProps}/>

		</Layout>	

	)

}

export async function getServerSideProps (context) {

	const {query} = context,

	res = await getPopulars(query.page);

  return {

    props: {

      animes:res.data,
      pagination:res.pagination

    },

  }

}
import Catalogue from 'components/Catalogue';
import Layout from 'components/Layout';
import {getPremiere} from 'services/animes';
import Pagination from 'components/Pagination';
import PageLayout from 'components/PageLayout';

export default function Estrenos ({animes,pagination}) {

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

		<Layout title="Estrenos" description="Tenemos los mas recientes estrenos desde el momento de su emision en japon">

			<PageLayout title="Estrenos">
				
				<Catalogue animes={animes}/>

			</PageLayout>

			<Pagination path={'estrenos'} {...pageProps}/>

		</Layout>	

	)

}

export async function getServerSideProps (context) {

	const {query} = context,

	res = await getPremiere(query.page);

  return {

    props: {

      animes:res.data,
      pagination:res.pagination

    },

  }

}


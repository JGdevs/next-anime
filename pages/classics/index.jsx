import Catalogue from 'components/Catalogue';
import Layout from 'components/Layout';
import {getClasics} from 'services/animes';
import Pagination from 'components/Pagination';
import PageLayout from 'components/PageLayout';

export default function Clasics ({animes,pagination}) {

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

		<Layout title="Classics" description="Yuyu hasuko, saint seiya, hokuto no ken, animes clasicos para que te conviertas en un otaku del cultura">

			<PageLayout title="Classics">
				
				<Catalogue animes={animes}/>

			</PageLayout>

      <Pagination path={'clasicos'} {...pageProps}/>

		</Layout>	

	)

}

export async function getServerSideProps (context) {

	const {query} = context,

	res = await getClasics(query.page);

  return {

    props: {

      animes:res.data,
      pagination:res.pagination

    },

  }

}
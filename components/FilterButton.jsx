import {useRouter} from 'next/router';

const FilterButton = () => {

	const router = useRouter();

	delete router.query.page;

	function handlerClick () {

		const params = JSON.parse(sessionStorage.getItem('filters'));

		sessionStorage.removeItem('filters');

		router.push({

			pathname:router.route,
			query:{...router.query,...params}

		});

	}

	return <button className="filters-btn" onClick={handlerClick}>Apply filters</button>

}

export default FilterButton;
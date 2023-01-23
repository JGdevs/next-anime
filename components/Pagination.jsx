import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from '../styles/Pagination.module.css';
import {usePagination,DOTS} from '../hooks/usePagination';

const Pagination = ({pathname,onPageChange,totalCount,siblingCount,currentPage,pageSize}) => {

  const router = useRouter();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (

    <ul className={styles.container}>

      <li className={styles.item} onClick={onPrevious}>

        <i className="bi-arrow-left-short fs-0"/>

      </li>

      {paginationRange.map(pageNumber => {
         
        if (pageNumber === DOTS) return <li className="pagination-item dots">&#8230;</li>;
		
        return (
          <Link 

            className={`${styles.item} ${pageNumber === currentPage ? styles.active : ''}`}
            key={pageNumber}
            href={{

              pathname,
              query:{...router.query,page:pageNumber}

            }} 

          >

            {pageNumber}

          </Link>
        );

      })}

      <li className={styles.item} onClick={onNext}>

        <i className="bi-arrow-right-short fs-0"/>

      </li>

    </ul>

  );
  

};

export default Pagination;
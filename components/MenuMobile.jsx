import Link from 'next/link';
import styles from '../styles/Header.module.css';

const MenuMobile = ({menuRef,handleMenu}) => {

	return (

		<aside ref={menuRef} className={`${styles.panel} ${styles.hidden}`}>

			<nav className={styles.menuMobile}>
				
				<Link href="/genres" onClick={handleMenu}>Genres</Link>
				<Link href="/releases" onClick={handleMenu}>Releases</Link>
				<Link href="/trending" onClick={handleMenu}>Trending</Link>

			</nav>

		</aside>

	)

}

export default MenuMobile;
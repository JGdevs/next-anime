import Link from 'next/link';
import styles from '../styles/Header.module.css';

const MenuMobile = ({menuRef,handleMenu}) => {

	return (

		<aside ref={menuRef} className={`${styles.panel} ${styles.hidden}`}>

			<nav className={styles.menuMobile}>
				
				<Link href="/generos" onClick={handleMenu}>Generos</Link>
				<Link href="/estrenos" onClick={handleMenu}>Estrenos</Link>
				<Link href="/destacados" onClick={handleMenu}>Destacados</Link>

			</nav>

		</aside>

	)

}

export default MenuMobile;
import aside from '/data/asideMenu.json';
import AsideOption from './AsideOption';
import styles from '/styles/Catalogue.module.css';

const AsideMenu = () => {

	return (

		<aside className={`${styles.aside} in-mobile`}>
			
			<nav className={styles.navMenu}>

				{Object.values(aside.data).map((value,i) => <AsideOption key={i} icon={value[0]} title={value[1]} link={value[2]}/>)}
				
			</nav>

		</aside>

	)

}

export default AsideMenu;
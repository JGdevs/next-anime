import Link from 'next/link';
import styles from '../styles/Catalogue.module.css';

const AsideOption = ({icon,title,link}) => {

	return (

		<li className={styles.menuOptions}>
		
			<i className={icon}></i>
			<Link href={link}>{title}</Link>	

		</li>

	)

}

export default AsideOption;
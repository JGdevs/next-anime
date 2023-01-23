import Link from 'next/link';
import styles from '../styles/Header.module.css';
import {useRef,useEffect} from 'react';
import MenuMobile from './MenuMobile';

const Header = ({color = ""}) => {

	const headerRef = useRef(),

	menuRef = useRef(),

	colors = ['transparent','#6f698c','#73abe4','#fe828c','#56c68b','#c92f4b','#76324e','#ffd700'];

	function handleMenu () {

		menuRef.current.classList.toggle(`${styles.hidden}`)
		menuRef.current.classList.toggle(`${styles.active}`)

	}

	useEffect(() => {

		const observer = new IntersectionObserver(entries => {

			entries.forEach((entry,i) => {

				if(entry.isIntersecting) {

					headerRef.current.style.setProperty('--color',colors[entry.target.dataset.color]);

				}

			});

		},{threshold:1});

		const boxes = document.querySelectorAll('section[data-color]');

		if(boxes) for(const box of boxes) observer.observe(box);

		return () => observer.disconnect(); 

	},[]);

	return (

		<header className={`${styles.header}`} ref={headerRef}>
			
			<Link className={styles.title} href="/">Next-Anime</Link>

			<nav className={styles.nav}>
				
				<Link className={styles.link} href="/genres">Genres</Link>
				<Link className={styles.link} href="/releases">Releases</Link>
				<Link className={styles.link} href="/Trending">Trending</Link>

			</nav>

			<i className="bi-list mr-rg-2 fs-1 on in-desktop" onClick={handleMenu}></i>

			<MenuMobile menuRef={menuRef} handleMenu={handleMenu}/>

		</header>

	)

}

export default Header;
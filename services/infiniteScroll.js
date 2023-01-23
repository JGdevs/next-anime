export function infiniteScroll () {

	const observer = new IntersectionObserver(entries => {

		if(entries[0].isIntersecting) {

			let newUrl = (origin === 'generos') ? `http://localhost:4069/${origin}/${genres}/${animes.length}` 

			:`http://localhost:4069/${origin}/${animes.length}`;

			setLoader(true);

			api.get(newUrl).then(res => {

				if(!res.err) {

					observer.disconnect();

					if(res.length === 0 ) {alert('no hay mas series'); setLoader(false); return false}

					setAnimes([...animes,...res]);

					setLoader(false);

				}

				else console.log(res.err);

			});

		}

	},{threshold:1});

	observer.observe(document.querySelector('.grid-gallery').lastElementChild);

}
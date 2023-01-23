import NekoBocc from 'nekobocc';
const nekobocc = new NekoBocc();


export async function hentai () {

	try {

		const data = await nekobocc.release();

		console.log(data);

	}

	catch (err) {console.log(err)}

}

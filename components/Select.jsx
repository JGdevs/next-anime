import styles from '/styles/Select.module.css';

const Select = ({title,options,onlyValue = false}) => {

	function addQueryParameter (prop,value) {

		if(!sessionStorage.getItem('filters')) {

			sessionStorage.setItem('filters',JSON.stringify({[prop]:value}));

		}

		else {

			const query = JSON.parse(sessionStorage.getItem('filters'))

			query[prop] = value;

			sessionStorage.setItem('filters',JSON.stringify(query));

		}

	}

	return (

		<div className={styles.container}>
		
			<select className={styles.select} onChange={({target}) => addQueryParameter(title,target.value)}>

				<option selected disabled hidden>{title}</option>

				{

					(onlyValue === true) ? options.map(op => <option key={op} value={op}>{op}</option>)

					: options.map(({name,id}) => <option key={id} value={id}>{name}</option>)

				}

			</select>

			<i className={`bi-chevron-up ${styles.arrow}`}></i>

		</div>

	)

} 

export default Select;
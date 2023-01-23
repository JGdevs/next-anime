import AsideMenu from '/components/AsideMenu';

const PageLayout = ({children,title}) => {

	return (

		<div className="flex-container after-header">
				
			<AsideMenu/>

			<div className="catalogue-container">
				
				<h2 className="fs-3">{title}</h2>

				{children}

			</div>

		</div>

	)

}

export default PageLayout;
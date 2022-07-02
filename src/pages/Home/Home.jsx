import React, { useContext, useState } from "react"
import style from './Home.module.scss'
import Card from '../../components/Card/Card'
import Searchbar from '../../components/Searchbar/Searchbar';
import AppContext from '../../context';

const Home = ({
	isLoading,
}) => {
	// State for search
	const [searchValue, setSearchValue] = useState('')
	// Import from context
	const {
		items,
		cartItems,
		isItemAdded,
		addToCart,
		addToFavorite,
		favoriteItems,
	} = useContext(AppContext)

	const renderItems = () => {

		const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

		return (
			(isLoading ? [...Array(12)] : filteredItems)
				.map((item, index) => {
					return (
						<li key={index} className={style.home__item}>
							<Card
								{...item}
								isLoading={isLoading}
								addFunc={addToCart}
								favoriteFunc={addToFavorite}
							/>
						</li>
					)
				})
		)
	}

	return (
		<section className={style.home}>

			<div className={style.home__header}>

				<h1 className={style.home__title}>{
					searchValue ?
						`Поиск: ${searchValue}` :
						'Все кроссовки'
				}</h1>

				<div className={style.home__search}>
					<Searchbar
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</div>

			</div>

			<ul className={style.home__list}>

				{ // Rendering cards
					renderItems()
				}

			</ul>

		</section>
	)
}

export default Home
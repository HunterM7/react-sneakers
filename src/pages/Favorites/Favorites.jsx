import React, { useContext, useState } from "react"
import style from './Favorites.module.scss'
import AppContext from '../../context';
import Card from '../../components/Card/Card'
import Searchbar from '../../components/Searchbar/Searchbar';

const Favorites = () => {

	// Import from context
	const {
		items,
		cartItems,
		isItemAdded,
		addToCart,
		addToFavorite,
		favoriteItems,
	} = useContext(AppContext)

	// State for search
	const [searchValue, setSearchValue] = useState('')

	return (
		<section className={style.favorites}>

			<div className={style.favorites__header}>

				<h1 className={style.favorites__title}>{
					searchValue ?
						`Поиск: ${searchValue}` :
						'Мои закладки'
				}</h1>

				<div className={style.favorites__search}>
					<Searchbar
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</div>

			</div>

			<ul className={style.favorites__list}>

				{ // Rendering cards
					favoriteItems
						.filter(item =>
							item.name.toLowerCase().includes(searchValue.toLowerCase()))
						.map(item => {

							return (
								<li key={item.id} className={style.favorites__item}>
									<Card
										{...item}
										addFunc={addToCart}
										favoriteFunc={addToFavorite}
									/>
								</li>
							)
						})
				}

			</ul>

		</section>
	)
}

export default Favorites
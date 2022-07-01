import React, { useState } from "react"
import style from './Favorites.module.scss'
import Card from '../../components/Card/Card'
import Searchbar from '../../components/Searchbar/Searchbar';

const Favorites = ({
	items,
	addToCart,
	addToFavorite,
}) => {
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
					items
						.filter(item =>
							item.name.toLowerCase().includes(searchValue.toLowerCase()))
						.map(item => {
							return (
								<li key={item.id} className={style.favorites__item}>
									<Card
										id={item.id}
										name={item.name}
										price={item.price}
										imgUrl={item.imgUrl}
										isFavorite={true}
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
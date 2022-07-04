import React, { useContext, useState } from "react"
import style from './Favorites.module.scss'
import AppContext from '../../context';
import Card from '../../components/Card/Card'
import Searchbar from '../../components/Searchbar/Searchbar';
import Plug from '../../components/Plug/Plug';

const Favorites = () => {

	// Import from context
	const {
		favoriteItems,
		addToCart,
		addToFavorite,
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

				{
					favoriteItems.length ? (
						<div className={style.favorites__search}>
							<Searchbar
								searchValue={searchValue}
								setSearchValue={setSearchValue}
							/>
						</div>
					) : null
				}

			</div>

			{
				favoriteItems.length ? (
					<>
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
													isFavorite
													addFunc={addToCart}
													favoriteFunc={addToFavorite}
												/>
											</li>
										)
									})
							}

						</ul>
					</>
				) : (
					<Plug
						type={'favorite'}
						onClick={console.log('click favorite button')}
					/>
				)
			}

		</section>
	)
}

export default Favorites
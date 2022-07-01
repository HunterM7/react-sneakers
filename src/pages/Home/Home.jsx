import React, { useState } from "react"
import style from './Home.module.scss'
import Card from '../../components/Card/Card'
import Searchbar from '../../components/Searchbar/Searchbar';

const Home = ({
	items,
	addToCart,
	addToFavorite,
	favoriteItems,
}) => {
	// State for search
	const [searchValue, setSearchValue] = useState('')

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
					items
						.filter(item =>
							item.name.toLowerCase().includes(searchValue.toLowerCase()))
						.map(item => {
							//TODO == == == == == == 
							const isFavorite = favoriteItems.some(el => {
								return +el.id === +item.id
							})

							return (
								<li key={item.id} className={style.home__item}>
									<Card
										id={item.id}
										name={item.name}
										price={item.price}
										imgUrl={item.imgUrl}
										isFavorite={isFavorite}
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

export default Home
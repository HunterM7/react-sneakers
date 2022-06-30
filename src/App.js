import React, { useEffect, useState } from "react"
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Sidemenu from './components/Sidemenu/Sidemenu';
import Button from './components/Button/Button';

function App() {
	// State for DataBase
	const [items, setItems] = useState([])
	// State for Cart
	const [cartItems, setCartItems] = useState([])
	// State for Sidebar
	const [isSidebarOpened, setIsSidebarOpened] = useState(false)
	// State for search
	const [searchValue, setSearchValue] = useState('')

	// Fetch
	useEffect(() => {
		fetch('https://62bc2af36b1401736cf3f1b2.mockapi.io/items')
			.then(res => res.json())
			.then(json => setItems(json))
	}, [])

	// Adding to cart or removing from it
	const addToCart = (item) => {
		if (cartItems.some(el => el.id === item.id)) {
			setCartItems(prev => {
				let newArr = prev.filter(el => {
					return el.id !== item.id
				})
				return newArr
			})
		} else {
			setCartItems(prev => [...prev, item])
		}
	}

	return (
		<div className="wrapper">

			{isSidebarOpened &&
				(
					<div className="side-menu">
						<Sidemenu
							cartItems={cartItems}
							setIsSidebarOpened={setIsSidebarOpened}
						/>
						<div
							className="side-menu__overlay"
							onClick={() => setIsSidebarOpened(false)}
						></div>
					</div>
				)
			}

			<Header
				onCartClick={() => setIsSidebarOpened(!isSidebarOpened)}
			/>

			<div className="content">

				<div className="content__header">
					<h1 className="content__title">{
						searchValue ?
							`Поиск: ${searchValue}` :
							'Все кроссовки'
					}</h1>
					<div className="search">
						<img src="img/search.svg" alt="Search" />
						<input
							type="text"
							placeholder="Search..."
							value={searchValue}
							onChange={e => setSearchValue(e.target.value)}
						/>
						<div className="search__btn">
							{
								searchValue &&
								<Button
									type="remove"
									onClick={() => setSearchValue('')}
								/>
							}
						</div>
					</div>
				</div>

				<ul className="content__list">

					{ // Rendering cards
						items
							.filter(item =>
								item.name.toLowerCase().includes(searchValue.toLowerCase()))
							.map(item => {
								return (
									<li key={item.id} className="content__item">
										<Card
											id={item.id}
											name={item.name}
											price={item.price}
											imgUrl={item.imgUrl}
											addFunc={addToCart}
											favoriteFunc={() => console.log('favorite')}
										/>
									</li>
								)
							})
					}

				</ul>

			</div>

		</div>
	)
}

export default App;

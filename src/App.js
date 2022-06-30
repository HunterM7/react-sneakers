import React, { useEffect, useState } from "react"
import axios from "axios";
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Sidemenu from './components/Sidemenu/Sidemenu';
import Button from './components/Button/Button';

const serverItems = 'https://62bc2af36b1401736cf3f1b2.mockapi.io/items/'
const serverCart = 'https://62bc2af36b1401736cf3f1b2.mockapi.io/cart/'
const serverFavorite = 'https://62bc2af36b1401736cf3f1b2.mockapi.io/favorite/'

function App() {
	// State for DataBase
	const [items, setItems] = useState([])
	// State for Cart
	const [cartItems, setCartItems] = useState([])
	// State for Favorite
	const [favoriteItems, setFavoriteItems] = useState([])
	// State for Sidebar
	const [isSidebarOpened, setIsSidebarOpened] = useState(false)
	// State for search
	const [searchValue, setSearchValue] = useState('')

	// Axios
	useEffect(() => {
		axios.get(serverItems).then(res => setItems(res.data))
		axios.get(serverCart).then(res => setCartItems(res.data))
		axios.get(serverFavorite).then(res => setFavoriteItems(res.data))
	}, [])

	// Adding to cart or removing from it
	const addToCart = (item) => {
		if (cartItems.some(el => el.id === item.id)) {
			setCartItems(prev => {
				removeFromCart(item.id)
				let newArr = prev.filter(el => {
					return el.id !== item.id
				})
				return newArr
			})
		} else {
			setCartItems(prev => [...prev, item])
			axios.post(serverCart, item)
		}
	}

	// Removing from cart
	const removeFromCart = (id) => {
		axios.delete(`${serverCart}${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	// Removing from favorite
	const removeFromFavorite = (id) => {
		axios.delete(`${serverFavorite}${id}`)
		setFavoriteItems(prev => prev.filter(item => item.id !== id))
	}

	// Add to Favorite
	const addToFavorite = (item) => {
		if (favoriteItems.some(el => el.id === item.id)) {
			setFavoriteItems(prev => {
				removeFromFavorite(item.id)
				let newArr = prev.filter(el => {
					return el.id !== item.id
				})
				return newArr
			})
		} else {
			setFavoriteItems(prev => [...prev, item])
			axios.post(serverFavorite, item)
		}
	}

	return (
		<div className="wrapper">

			{isSidebarOpened &&
				(
					<Sidemenu
						cartItems={cartItems}
						setIsSidebarOpened={setIsSidebarOpened}
						onRemove={removeFromCart}
					/>
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
											favoriteFunc={addToFavorite}
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

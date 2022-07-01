import React, { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import Header from './components/Header/Header'
import Sidemenu from './components/Sidemenu/Sidemenu';
import Home from './pages/Home/Home';
import Favorites from "./pages/Favorites/Favorites";

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

	// Axios
	useEffect(() => {
		axios.get(serverItems).then(res => setItems(res.data))
		axios.get(serverCart).then(res => setCartItems(res.data))
		axios.get(serverFavorite).then(res => setFavoriteItems(res.data))
	}, [])

	// Adding to cart or removing from it
	const addToCart = (item) => {
		if (cartItems.some(el => el.id === item.id)) {
			removeFromCart(item.id)
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

	// Add to Favorite
	const addToFavorite = async (item) => {

		try {
			if (favoriteItems.find(el => el.id === item.id)) {
				axios.delete(`${serverFavorite}${item.id}`)

				setFavoriteItems(prev => prev.filter(el => el.id !== item.id))

			} else {
				const { data } = await axios.post(serverFavorite, item)
				setFavoriteItems(prev => [...prev, data])
			}
		} catch (error) {
			alert('Не удалось добавить в Favorites')
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

				<Routes>

					<Route
						path="/"
						element={
							<Home
								addToFavorite={addToFavorite}
								addToCart={addToCart}
								items={items}
								favoriteItems={favoriteItems}
							/>
						}
					/>

					<Route
						path="favorites"
						element={
							<Favorites
								items={favoriteItems}
								addToCart={addToCart}
								addToFavorite={addToFavorite}
							/>
						}
					/>

				</Routes>

			</div>

		</div>
	)
}

export default App;

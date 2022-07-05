import React, { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import AppContext from './context'
import Header from './components/Header/Header'
import Sidemenu from './components/Sidemenu/Sidemenu';
import Home from './pages/Home/Home';
import Favorites from "./pages/Favorites/Favorites";
import Orders from './pages/Orders/Orders';

const serverItems = 'https://62bc2af36b1401736cf3f1b2.mockapi.io/items/'
const serverCart = 'https://62bc2af36b1401736cf3f1b2.mockapi.io/cart/'
const serverFavorite = 'https://62bc2af36b1401736cf3f1b2.mockapi.io/favorite/'
const serverOrders = 'https://62bc2af36b1401736cf3f1b2.mockapi.io/orders'

function App() {
	// State for DataBase
	const [items, setItems] = useState([])
	// State for Cart
	const [cartItems, setCartItems] = useState([])
	// State for Favorite
	const [favoriteItems, setFavoriteItems] = useState([])
	// State for Sidebar
	const [isSidebarOpened, setIsSidebarOpened] = useState(false)
	// State for loading cards
	const [isLoading, setIsLoading] = useState(true)

	// Axios
	useEffect(() => {
		try {
			async function fetchData() {
				setIsLoading(true)
				const cartResponse = await axios.get(serverCart)
				const favoriteResponse = await axios.get(serverFavorite)
				const itemsResponse = await axios.get(serverItems)

				setIsLoading(false)
				setCartItems(cartResponse.data)
				setFavoriteItems(favoriteResponse.data)
				setItems(itemsResponse.data)
			}

			fetchData()
		} catch (error) {
			alert('Что-то пошло не так при загрузке данных с сервера')
		}
	}, [])

	// Adding to cart or removing from it
	const addToCart = async (item, url = serverCart) => {
		try {
			if (cartItems.some(el => Number(el.id) === Number(item.id))) {
				removeItemFromState(setCartItems, item.id)
				removeItemFromServer(url, item.id)
			} else {
				setCartItems(prev => [...prev, item])
				await axios.post(serverCart, item)
			}
		} catch (error) {
			alert('Ошибка при попытке добавить или удалить товар')
		}
	}
	// Adding to Favorite or removing from it
	const addToFavorite = (item) => {
		if (favoriteItems.find(el => Number(el.id) === Number(item.id))) {
			removeItemFromServer(serverFavorite, item.id)
			removeItemFromState(setFavoriteItems, item.id)
		} else {
			axios.post(serverFavorite, item)
			setFavoriteItems(prev => [...prev, item])
		}
	}
	// Remove item from state and server
	const removeItemFromState = (stateFunc, id) => {
		stateFunc(prev => prev.filter(item => Number(item.id) !== Number(id)))
	}
	const removeItemFromServer = (url, id) => {
		axios.delete(`${url}${id}`)
	}
	// Check if item added to cart or favorite
	const isItemAdded = (array, id) => {
		return array.some(el => Number(el.id) === Number(id))
	}

	return (
		<AppContext.Provider
			value={{
				serverItems,
				serverCart,
				serverFavorite,
				serverOrders,

				items, setItems,
				cartItems, setCartItems,
				favoriteItems, setFavoriteItems,

				isSidebarOpened, setIsSidebarOpened,
				isLoading, setIsLoading,

				addToCart,
				addToFavorite,
				removeItemFromState,
				removeItemFromServer,
				isItemAdded,
			}}
		>
			<div className='wrapper' >

				<Sidemenu isSidebarOpened={isSidebarOpened} />

				<Header
					onCartClick={() => setIsSidebarOpened(!isSidebarOpened)}
				/>

				<div className="content">

					<Routes>

						<Route path="/" element={
							<Home
								favoriteItems={favoriteItems}
								isLoading={isLoading}
							/>
						} />

						<Route path="favorites" element={
							<Favorites
								addToCart={addToCart}
								addToFavorite={addToFavorite}
							/>
						} />

						<Route path="orders" element={
							<Orders
							/>
						} />

					</Routes>

				</div>

			</div>
		</AppContext.Provider>
	)
}

export default App;

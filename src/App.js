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

				const [
					cartResponse,
					favoriteResponse,
					itemsResponse,
				] = await Promise.all([
					axios.get(serverCart),
					axios.get(serverFavorite),
					axios.get(serverItems),
				])

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
			const findItem = cartItems.find(el => Number(el.parentId) === Number(item.id))

			if (findItem) {
				removeItemFromState(setCartItems, item.id)
				removeItemFromServer(url, findItem.id)
			} else {
				setCartItems(prev => [...prev, item])
				const { data } = await axios.post(serverCart, item)
				setCartItems(prev => prev.map(item => {
					if (Number(item.parentId) === Number(data.parentId)) {
						return {
							...item,
							id: data.id
						}
					}
					return item
				}))
			}
		} catch (error) {
			alert('Ошибка при попытке добавить или удалить товар')
			console.debug(error)
		}
	}
	// Adding to Favorite or removing from it
	const addToFavorite = async (item) => {
		try {
			if (favoriteItems.find(el => Number(el.id) === Number(item.id))) {
				removeItemFromServer(serverFavorite, item.id)
				removeItemFromState(setFavoriteItems, item.id)
			} else {
				setFavoriteItems(prev => [...prev, item])
				await axios.post(serverFavorite, item)
			}
		} catch (error) {
			console.debug(error)
		}
	}
	// Remove item from state and server
	const removeItemFromState = (stateFunc, id) => {
		stateFunc(prev => prev.filter(item => Number(item.parentId) !== Number(id)))
	}
	const removeItemFromServer = async (url, id) => {
		try {
			await axios.delete(`${url}${id}`)
		} catch (error) {
			alert('Ошибка при попытке удалить товар с сервера')
			console.debug(error)
		}
	}
	// Check if item added to cart or favorite
	const isItemAdded = (array, id) => {
		return array.some(el => Number(el.parentId) === Number(id))
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

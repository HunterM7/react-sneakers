import React, { useEffect, useState } from "react"
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Sidemenu from './components/Sidemenu/Sidemenu';

function App() {
	// State for DataBase
	const [items, setItems] = useState([])
	// State for Cart
	const [cartItems, setCartItems] = useState([])
	// State for sidebar
	const [isSidebarOpened, setIsSidebarOpened] = useState(false)

	// Fetch
	useEffect(() => {
		fetch('https://62bc2af36b1401736cf3f1b2.mockapi.io/items')
			.then(res => res.json())
			.then(json => setItems(json))
	}, [])

	// Adding to cart
	const addToCart = (item) => {
		setCartItems(prev => [...prev, item])
	}

	return (
		<div className="wrapper">

			{isSidebarOpened &&
				(
					<div className="side-menu">
						<Sidemenu cartItems={cartItems} />
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
					<h1 className="content__title">Все кроссовки</h1>
					<div className="search">
						<img src="img/search.svg" alt="Search" />
						<input type="text" placeholder="Search..." />
					</div>
				</div>

				<ul className="content__list">

					{ // Rendering cards
						items.map(item => {
							return (
								<li className="content__item">
									<Card
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

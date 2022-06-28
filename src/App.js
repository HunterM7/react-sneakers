import React from "react"
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Sidemenu from './components/Sidemenu/Sidemenu';

const cards = [
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12990,
		imgUrl: '/img/sneakers/sneaker-1.png',
	},
	{
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: 14690,
		imgUrl: '/img/sneakers/sneaker-2.png',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8490,
		imgUrl: '/img/sneakers/sneaker-3.png',
	},
	{
		name: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8990,
		imgUrl: '/img/sneakers/sneaker-4.png',
	},
	{
		name: 'Мужские Кроссовки Under Armour Curry 8',
		price: 15190,
		imgUrl: '/img/sneakers/sneaker-5.png',
	},
	{
		name: 'Мужские Кроссовки Nike Kyrie 7',
		price: 11290,
		imgUrl: '/img/sneakers/sneaker-6.png',
	},
	{
		name: 'Мужские Кроссовки Jordan Air Jordan 11',
		price: 10790,
		imgUrl: '/img/sneakers/sneaker-7.png',
	},
	{
		name: 'Мужские Кроссовки Nike LeBron XVIII',
		price: 16490,
		imgUrl: '/img/sneakers/sneaker-8.png',
	},
	{
		name: 'Мужские Кроссовки Nike Lebron XVIII Low',
		price: 13990,
		imgUrl: '/img/sneakers/sneaker-9.png',
	},
	{
		name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
		price: 11290,
		imgUrl: '/img/sneakers/sneaker-10.png',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12990,
		imgUrl: '/img/sneakers/sneaker-11.png',
	},
	{
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: 14690,
		imgUrl: '/img/sneakers/sneaker-12.png',
	},
]

function App() {
	return (
		<div className="wrapper">


			<div className="side-menu">
				<Sidemenu />
				<div className="side-menu__overlay"></div>
			</div>

			<Header />

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
						cards.map(item => {
							return (
								<li className="content__item">
									<Card name={item.name} price={item.price} imgUrl={item.imgUrl} />
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

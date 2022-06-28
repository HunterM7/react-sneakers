import React from "react"
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Sidemenu from './components/Sidemenu/Sidemenu';

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

					<li className="content__item">
						<Card />
					</li>

					<li className="content__item">
						<Card />
					</li>

					<li className="content__item">
						<Card />
					</li>

					<li className="content__item">
						<Card />
					</li>

				</ul>

			</div>

		</div>
	)
}

export default App;

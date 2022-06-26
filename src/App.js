import React from "react"

function App() {
	return (
		<div className="wrapper">

			<header className="header">

				<div className="header__left">

					<img src="/img/logo.png" alt="Logo" />

					<div className="header__info">
						<h3 className="header__title">React sneakers</h3>
						<p className="header__subtitle">Магазин лучших кроссовок</p>
					</div>

				</div>

				<ul className="header__right">
					<li className="header__cart">
						<img src="/img/cart.svg" alt="Cart" />
						<span>1205 руб.</span>
					</li>
					<li>
						<img src="/img/like.svg" alt="Favorite" />
					</li>
					<li>
						<img src="/img/user.svg" alt="User" />
					</li>
				</ul>

			</header>

			<div className="content">

				<h1 className="content__title">Все кроссовки</h1>


				<div className="card">
					<img className="card__img" src="/img/sneakers/sneaker-1.png" alt="" />
					<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
					<div className="card__info">
						<div className="card__price">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="card__add">
							<img src="/img/add.svg" alt="Plus" />
						</button>
					</div>
				</div>


			</div>

		</div>
	)
}

export default App;

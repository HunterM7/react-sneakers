import React from "react"
import Button from './components/Button/Button'

function App() {
	return (
		<div className="wrapper">


			<div className="side-menu">
				<div className="side-menu__drawer">

					<h2 className="side-menu__title">Корзина</h2>

					<ul className="cartList">

						<li className="cartItem">

							<img className="cartItem__img" src="./img/sneakers/sneaker-2.png" alt="Sneaker" />

							<div className="cartItem__info">
								<p className="cartItem__title">Мужские Кроссовки Nike Air Max 270</p>
								<b className="cartItem__price">12 999 руб.</b>
							</div>

							<div className="cartItem__btn">
								<Button type="remove" isActive="false" />
							</div>

						</li>

						<li className="cartItem">

							<img className="cartItem__img" src="./img/sneakers/sneaker-3.png" alt="Sneaker" />

							<div className="cartItem__info">
								<p className="cartItem__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
								<b className="cartItem__price">12 999 руб.</b>
							</div>

							<div className="cartItem__btn">
								<Button type="remove" isActive="false" />
							</div>

						</li>

					</ul>

					<div className="cartResult">



					</div>

				</div>
				<div className="side-menu__overlay"></div>
			</div>

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

				<div className="content__header">
					<h1 className="content__title">Все кроссовки</h1>
					<div className="search">
						<img src="img/search.svg" alt="Search" />
						<input type="text" placeholder="Search..." />
					</div>
				</div>

				<ul className="content__list">

					<li className="content__item">
						<div className="card">
							<div className="card__like">
								<Button type="favorite" isActive="false" />
							</div>
							<img className="card__img" src="/img/sneakers/sneaker-1.png" alt="" />
							<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card__info">
								<div className="card__price">
									<span>Цена:</span>
									<b>12 999 руб.</b>
								</div>
								<div className="card__add">
									<Button type="add" isActive="false" />
								</div>
							</div>
						</div>
					</li>

					<li className="content__item">
						<div className="card">
							<div className="card__like">
								<Button type="favorite" isActive="false" />
							</div>
							<img className="card__img" src="/img/sneakers/sneaker-2.png" alt="" />
							<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card__info">
								<div className="card__price">
									<span>Цена:</span>
									<b>12 999 руб.</b>
								</div>
								<div className="card__add">
									<Button type="add" isActive="true" />
								</div>
							</div>
						</div>
					</li>

					<li className="content__item">
						<div className="card">
							<div className="card__like">
								<Button type="favorite" isActive="false" />
							</div>
							<img className="card__img" src="/img/sneakers/sneaker-3.png" alt="" />
							<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card__info">
								<div className="card__price">
									<span>Цена:</span>
									<b>12 999 руб.</b>
								</div>
								<div className="card__add">
									<Button type="add" isActive="false" />
								</div>
							</div>
						</div>
					</li>

					<li className="content__item">
						<div className="card">
							<div className="card__like">
								<Button type="favorite" isActive="false" />
							</div>
							<img className="card__img" src="/img/sneakers/sneaker-4.png" alt="" />
							<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card__info">
								<div className="card__price">
									<span>Цена:</span>
									<b>12 999 руб.</b>
								</div>
								<div className="card__add">
									<Button type="add" isActive="false" />
								</div>
							</div>
						</div>
					</li>

				</ul>



			</div>

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
						<div className="card">
							<div className="card__like">
								<Button type="favorite" isActive="false" />
							</div>
							<img className="card__img" src="/img/sneakers/sneaker-1.png" alt="" />
							<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card__info">
								<div className="card__price">
									<span>Цена:</span>
									<b>12 999 руб.</b>
								</div>
								<div className="card__add">
									<Button type="add" isActive="false" />
								</div>
							</div>
						</div>
					</li>

					<li className="content__item">
						<div className="card">
							<div className="card__like">
								<Button type="favorite" isActive="false" />
							</div>
							<img className="card__img" src="/img/sneakers/sneaker-2.png" alt="" />
							<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card__info">
								<div className="card__price">
									<span>Цена:</span>
									<b>12 999 руб.</b>
								</div>
								<div className="card__add">
									<Button type="add" isActive="true" />
								</div>
							</div>
						</div>
					</li>

					<li className="content__item">
						<div className="card">
							<div className="card__like">
								<Button type="favorite" isActive="false" />
							</div>
							<img className="card__img" src="/img/sneakers/sneaker-3.png" alt="" />
							<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card__info">
								<div className="card__price">
									<span>Цена:</span>
									<b>12 999 руб.</b>
								</div>
								<div className="card__add">
									<Button type="add" isActive="false" />
								</div>
							</div>
						</div>
					</li>

					<li className="content__item">
						<div className="card">
							<div className="card__like">
								<Button type="favorite" isActive="false" />
							</div>
							<img className="card__img" src="/img/sneakers/sneaker-4.png" alt="" />
							<p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<div className="card__info">
								<div className="card__price">
									<span>Цена:</span>
									<b>12 999 руб.</b>
								</div>
								<div className="card__add">
									<Button type="add" isActive="false" />
								</div>
							</div>
						</div>
					</li>

				</ul>

			</div>

		</div>
	)
}

export default App;

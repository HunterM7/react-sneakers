import React from "react"
import style from './Header.module.scss'

const Header = () => {
	return (
		<header className={style.header}>

			<div className={style.header__left}>

				<img src="/img/logo.png" alt="Logo" />

				<div className={style.header__info}>
					<h3 className={style.header__title}>React sneakers</h3>
					<p className={style.header__subtitle}>Магазин лучших кроссовок</p>
				</div>

			</div>

			<ul className={style.header__right}>

				<li className={style.header__cart}>
					<img src="/img/cart.svg" alt="Cart" />
					<span>1205 руб.</span>
				</li>

				<li className={style.header__favorite}>
					<img src="/img/like.svg" alt="Favorite" />
				</li>

				<li className={style.header__user}>
					<img src="/img/user.svg" alt="User" />
				</li>

			</ul>

		</header>
	)
}

export default Header
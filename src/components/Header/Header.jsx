import React from "react"
import { Link } from "react-router-dom";
import style from './Header.module.scss'

const Header = ({
	onCartClick,
}) => {

	return (
		<header className={style.header}>

			<Link to='/'>

				<div className={style.header__left}>

					<img src="/img/logo.png" alt="Logo" />

					<div className={style.header__info}>
						<h4 className={style.header__title}>React sneakers</h4>
						<p className={style.header__subtitle}>Магазин лучших кроссовок</p>
					</div>

				</div>

			</Link>

			<ul className={style.header__right}>

				<li onClick={onCartClick} className={style.header__cart}>
					<img src="/img/cart.svg" alt="Cart" />
					<span>1205 руб.</span>
				</li>

				<li className={style.header__favorite}>
					<Link to='favorites'>
						<img src="/img/like.svg" alt="Favorite" />
					</Link>
				</li>

				<li className={style.header__user}>
					<Link to='orders'>
						<img src="/img/user.svg" alt="User" />
					</Link>
				</li>

			</ul>

		</header>
	)
}

export default Header
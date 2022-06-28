import React from "react"
import style from './Sidemenu.module.scss'
import Button from '../Button/Button';

const Sidemenu = () => {
	return (
		<div className={style.sideMenu}>

			<h2 className={style.sideMenu__title}>Корзина</h2>

			<div className={style.sideMenu__content}>

				<ul className={style.cartList}>

					<li className={style.cartItem}>

						<img className={style.cartItem__img} src="./img/sneakers/sneaker-2.png" alt="Sneaker" />

						<div className={style.cartItem__info}>
							<p className={style.cartItem__title}>Мужские Кроссовки Nike Air Max 270</p>
							<b className={style.cartItem__price}>12 999 руб.</b>
						</div>

						<div className={style.cartItem__btn}>
							<Button type="remove" isActive="false" />
						</div>

					</li>

				</ul>

			</div>

			<div className="cartResult">

				<ul className="cartResult__list">
					<li className="cartResult__item">
						<p className="cartResult__title">Итого:</p>
						<div className="cartResult__separator"></div>
						<b className="cartResult__price">21 498 руб.</b>
					</li>
					<li className="cartResult__item">
						<p className="cartResult__title">Налог 5%:</p>
						<div className="cartResult__separator"></div>
						<b className="cartResult__price">1074 руб.</b>
					</li>
				</ul>

				<button className="cartResult__btn">
					Оформить заказ
					<img src="/img/arrow.svg" alt="arrow" />
				</button>

			</div>

		</div>
	)
}

export default Sidemenu
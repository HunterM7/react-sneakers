import React from "react"
import style from './CartItem.module.scss'
import Button from '../Button/Button';

const CartItem = ({ cartItem }) => {
	return (
		<div className={style.cartItem}>

			<img className={style.cartItem__img} src={cartItem.imgUrl} alt="Sneaker" />

			<div className={style.cartItem__info}>
				<p className={style.cartItem__title}>{cartItem.name}</p>
				<b className={style.cartItem__price}>{cartItem.price}</b>
			</div>

			<div className={style.cartItem__btn}>
				<Button type="remove" isActive={false} />
			</div>

		</div>
	)
}

export default CartItem
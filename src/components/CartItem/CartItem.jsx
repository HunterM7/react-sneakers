import React, { useContext } from "react"
import style from './CartItem.module.scss'
import Button from '../Button/Button';
import AppContext from '../../context';

const CartItem = ({ cartItem, onRemove }) => {

	// Contex for delete button
	const { serverCart } = useContext(AppContext)

	return (
		<div className={style.cartItem}>

			<img className={style.cartItem__img} src={cartItem.imgUrl} alt="Sneaker" />

			<div className={style.cartItem__info}>
				<p className={style.cartItem__title}>{cartItem.name}</p>
				<b className={style.cartItem__price}>{cartItem.price}</b>
			</div>

			<div className={style.cartItem__btn}>
				<Button type="remove" isActive={false} onClick={() => onRemove(cartItem, serverCart)} />
			</div>

		</div>
	)
}

export default CartItem
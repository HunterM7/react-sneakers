import React from 'react'
import style from './Plug.module.scss'
import MainButton from '../MainButton/MainButton';
import imgCart from './img/cart.jpg'
import imgFavorite from './img/favorite.jpg'
import imgOrder from './img/order.jpg'
import imgOrderDone from './img/orderDone.jpg'

const Plug = ({
	orderId = 0,
	type, // cart, favorite, order, orderDone
	onClick,
}) => {
	let title, desc, btnText, img

	switch (type) {
		case 'cart':
			title = 'Корзина пустая'
			desc = 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
			btnText = 'Вернуться назад'
			img = imgCart
			break;

		case 'favorite':
			title = 'Закладок нет :('
			desc = 'Вы ничего не добавляли в закладки'
			btnText = 'Вернуться назад'
			img = imgFavorite
			break;

		case 'order':
			title = 'У вас нет заказов'
			desc = 'Вы нищеброд?  Оформите хотя бы один заказ'
			btnText = 'Вернуться назад'
			img = imgOrder
			break;

		case 'orderDone':
			title = 'Заказ оформлен!'
			desc = `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
			btnText = 'Вернуться назад'
			img = imgOrderDone
			break;

		default:
			break;
	}

	return (
		<div className={style.container} >
			<img src={img} alt="Plug img" className={style.img} />
			<h3 className={style.title}>{title}</h3>
			<p className={style.desc}>{desc}</p>
			<div className={style.btn}>
				<MainButton text={btnText} onClickFunc={onClick} />
			</div>
		</div>
	)
}

export default Plug
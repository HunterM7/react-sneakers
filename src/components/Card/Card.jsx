import React from "react"
import style from './Card.module.scss'
import Button from '../Button/Button';

const Card = () => {
	return (
		<div className={style.card}>

			<div className={style.card__like}>
				<Button type="favorite" isActive="false" />
			</div>

			<img className={style.card__img} src="/img/sneakers/sneaker-1.png" alt="" />

			<p className={style.card__title}>Мужские Кроссовки Nike Blazer Mid Suede</p>

			<div className={style.card__info}>

				<div className={style.card__price}>
					<span>Цена:</span>
					<b>12 999 руб.</b>
				</div>

				<div className={style.card__add}>
					<Button type="add" isActive="false" />
				</div>

			</div>

		</div>
	)
}

export default Card
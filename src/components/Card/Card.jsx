import React from "react"
import style from './Card.module.scss'
import Button from '../Button/Button';

const Card = ({ name, price, imgUrl }) => {
	return (
		<div className={style.card}>

			<div className={style.card__like}>
				<Button type="favorite" isActive="false" />
			</div>

			<img className={style.card__img} src={imgUrl} alt="" />

			<p className={style.card__title}>{name}</p>

			<div className={style.card__info}>

				<div className={style.card__price}>
					<span>Цена:</span>
					<b>{price}</b>
				</div>

				<div className={style.card__add}>
					<Button type="add" isActive="false" />
				</div>

			</div>

		</div>
	)
}

export default Card
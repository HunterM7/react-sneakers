import React, { useState } from "react"
import style from './Card.module.scss'
import Button from '../Button/Button';

const Card = ({
	id,
	name,
	price,
	imgUrl,
	isFavorite = false,
	addFunc,
	favoriteFunc,
}) => {

	// State for Add button and Favorite button

	const [isAddActive, setIsAddActive] = useState(false)
	const [isFavoriteActive, setIsFavoriteActive] = useState(isFavorite)

	const onClickAdd = () => {
		addFunc({ id, name, price, imgUrl })
		setIsAddActive(!isAddActive)
	}

	const onClickFavorite = () => {
		favoriteFunc({ id, name, price, imgUrl })
		setIsFavoriteActive(!isFavoriteActive)
	}

	return (
		<div className={style.card}>

			<div className={`
				${style.card__like}
				${isFavoriteActive && style.active}
			`}>
				<Button
					type="favorite"
					isActive={isFavoriteActive}
					onClick={onClickFavorite}
				/>
			</div>

			<img className={style.card__img} src={imgUrl} alt="" />

			<p className={style.card__title}>{name}</p>

			<div className={style.card__info}>

				<div className={style.card__price}>
					<span>Цена:</span>
					<b>{price}</b>
				</div>

				<div className={style.card__add}>
					<Button
						type="add"
						isActive={isAddActive}
						onClick={onClickAdd}
					/>
				</div>

			</div>

		</div>
	)
}

export default Card
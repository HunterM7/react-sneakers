import React, { useState } from "react"
import style from './Card.module.scss'
import Button from '../Button/Button';

const Card = ({
	name,
	price,
	imgUrl,
	addFunc,
	favoriteFunc,
}) => {

	// State for Add button and Favorite button

	const [isAddActive, setIsAddActive] = useState(false)
	const [isFavoriteActive, setIsFavoriteActive] = useState(false)

	const onClickAdd = () => {
		addFunc({ name, price, imgUrl })
		setIsAddActive(!isAddActive)
	}

	const onClickFavorite = () => {
		favoriteFunc()
		setIsFavoriteActive(!isFavoriteActive)
		isFavoriteActive ?
			setFavoriteClass('') :
			setFavoriteClass(`${style.active}`)
	}

	// Visibility for Favorite button
	const [favoriteClass, setFavoriteClass] = useState('')

	return (
		<div className={style.card}>

			<div className={`
				${style.card__like}
				${favoriteClass}
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
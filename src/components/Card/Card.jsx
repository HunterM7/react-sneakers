import React, { useContext, useState } from "react"
import ContentLoader from "react-content-loader"
import style from './Card.module.scss'
import Button from '../Button/Button';
import AppContext from '../../context';

const Card = ({
	id,
	name,
	price,
	imgUrl,
	isLoading = false,
	isFavorite = false,
	addFunc,
	favoriteFunc,
}) => {
	// Context for Card
	const {
		isItemAdded,
		cartItems,
	} = useContext(AppContext)

	const isAddedToCart = isItemAdded(cartItems, id)

	const [isAddedToFavorite, setIsAddedToFavorite] = useState(isFavorite)

	const onClickAdd = () => {
		addFunc({ id, name, price, imgUrl })
	}

	const onClickFavorite = () => {
		favoriteFunc({ id, name, price, imgUrl })
		setIsAddedToFavorite(!isFavorite)
	}

	return (
		<div className={style.card} >

			{
				isLoading ? (
					<ContentLoader
						speed={2}
						width={150}
						height={200}
						viewBox="0 0 150 200"
						backgroundColor="#f2f2f2"
						foregroundColor="#ecebeb"
					>
						<rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
						<rect x="0" y="118" rx="3" ry="3" width="150" height="16" />
						<rect x="0" y="138" rx="3" ry="3" width="90" height="16" />
						<rect x="0" y="174" rx="8" ry="8" width="80" height="24" />
						<rect x="118" y="166" rx="8" ry="8" width="32" height="32" />
					</ContentLoader>
				) : (
					<>
						<div className={`
							${style.card__like}
							${isAddedToFavorite && style.active}
						`}>
							<Button
								type="favorite"
								isActive={isAddedToFavorite}
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
									isActive={isAddedToCart}
									onClick={onClickAdd}
								/>
							</div>

						</div>
					</>
				)
			}

		</div>
	)
}

export default Card
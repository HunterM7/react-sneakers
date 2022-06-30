import React from "react"
import style from './Sidemenu.module.scss'
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';

const Sidemenu = ({
	cartItems = [],
	setIsSidebarOpened,
	onRemove,
}) => {

	return (
		<div className={style.wrapper}>

			<div className={style.sideMenu}>

				<div className={style.sideMenu__header}>
					<h2 className={style.sideMenu__title}>Корзина</h2>
					<Button
						type={'remove'}
						isActive={false}
						onClick={() => setIsSidebarOpened(false)}
					/>
				</div>

				{
					cartItems.length > 0 ?
						(
							<div className={style.sideMenu__wrapper}>

								<div className={style.sideMenu__content}>

									<ul className={style.cartList}>

										{ //Rendering CartItems
											cartItems.map(item => {
												return (
													<li key={Math.random()} className={style.cartItem}>
														<CartItem
															cartItem={item}
															onRemove={onRemove}
														/>
													</li>
												)
											})
										}

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

						) :
						(<h1>Корзина пуста</h1>)
				}

			</div>

			<div
				className={style.overlay}
				onClick={() => setIsSidebarOpened(false)}
			></div>

		</div>
	)
}

export default Sidemenu
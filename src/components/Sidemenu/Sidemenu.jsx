import React, { useState, useContext } from "react"
import style from './Sidemenu.module.scss'
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import Plug from '../Plug/Plug';
import MainButton from '../MainButton/MainButton';
import AppContext from '../../context';
import axios from 'axios';
import { useCart } from "../../hooks/useCart";



const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const Sidemenu = ({ isSidebarOpened }) => {

	const {
		setIsSidebarOpened,
		addToCart,
		serverCart,
		serverOrders,
	} = useContext(AppContext)

	isSidebarOpened && document.body.classList.add('blocked')
	!isSidebarOpened && document.body.classList.remove('blocked')

	const { cartItems, setCartItems, totalPrice } = useCart()

	const [isOrderDone, setIsOrderDone] = useState(false)
	const [orderId, setOrderId] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const onClickOrder = async () => {
		try {
			setIsLoading(true)
			const { data } = await axios.post(serverOrders, { items: cartItems })

			for (let i = 0; i < cartItems.length; i++) {
				await axios.delete(`${serverCart}${cartItems[i].id}`)
				await delay(100)
			}

			setOrderId(data.id)
			setCartItems([])
			setIsOrderDone(true)
		} catch (error) {
			alert('Не удалось создать заказ!')
		}

		setIsLoading(false)
	}

	return (
		<div className={`
			${style.wrapper}
			${isSidebarOpened && style.active}
		`}>

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
													<li key={item.id} className={style.cartItem}>
														<CartItem
															cartItem={item}
															onRemove={addToCart}
														/>
													</li>
												)
											})
										}

									</ul>

								</div>

								<div className={style.cartResult}>

									<ul className={style.cartResult__list}>
										<li className={style.cartResult__item}>
											<p className={style.cartResult__title}>Итого:</p>
											<div className={style.cartResult__separator}></div>
											<b className={style.cartResult__price}>{`${totalPrice} руб.`}</b>
										</li>
										<li className={style.cartResult__item}>
											<p className={style.cartResult__title}>Налог 5%:</p>
											<div className={style.cartResult__separator}></div>
											<b className={style.cartResult__price}>{`${totalPrice * 0.05} руб.`}</b>
										</li>
									</ul>

									<div className={style.cartResult__btn}>

										<MainButton
											isDisabled={isLoading}
											text={'Оформить заказ'}
											isSubmit
											onClickFunc={onClickOrder}
										/>

									</div>

								</div>
							</div>

						) : isOrderDone ? (
							<Plug
								orderId={orderId}
								type={'orderDone'}
								onClick={() => setIsSidebarOpened(false)}
							/>
						) : (
							<Plug
								type={'cart'}
								onClick={() => setIsSidebarOpened(false)}
							/>
						)

				}

			</div>

			<div className={style.overlay}
				onClick={() => setIsSidebarOpened(false)}
			></div>


		</div>
	)
}

export default Sidemenu
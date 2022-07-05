import React, { useState, useContext, useEffect } from 'react'
import style from './Orders.module.scss'
import AppContext from '../../context';
import axios from 'axios';
import Plug from '../../components/Plug/Plug';
import Searchbar from '../../components/Searchbar/Searchbar';
import Card from '../../components/Card/Card';

const Orders = () => {
	const {
		serverOrders,
		addToCart,
		addToFavorite,
		favoriteItems,
		isItemAdded,
	} = useContext(AppContext)
	const [searchValue, setSearchValue] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [orders, setOrders] = useState([])

	useEffect(() => {
		try {
			const getOrders = async () => {
				const { data } = await axios.get(serverOrders)
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
				setIsLoading(false)
			}
			getOrders()
		} catch (error) {
			alert('Не удалось загрузить заказы')
			console.debug(error)
		}
	}, [])

	const renderItems = () => {

		const filteredItems = orders.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

		return (
			(isLoading ? [...Array(12)] : filteredItems)
				.map((item, index) => {
					return (
						<li key={index} className={style.orders__item}>
							<Card
								{...item}
								isLoading={isLoading}
								isFavorite={() => {
									//TODO: При первой отрисовке не подгружается item. Возвращает все-равно Array(12) и в результате undefined
									let res = isItemAdded(favoriteItems, item && item.id)
									// console.log(item)
									// console.log(res)
									return res
								}}
								addFunc={addToCart}
								favoriteFunc={addToFavorite}
							/>
						</li>
					)
				})
		)
	}

	return (
		<section className={style.orders}>

			<div className={style.orders__header}>

				<h1 className={style.orders__title}>{
					searchValue ?
						`Поиск: ${searchValue}` :
						'Мои заказы'
				}</h1>

				<div className={style.orders__search}>
					<Searchbar
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</div>

			</div>

			{
				!orders.length && !isLoading ?
					(
						<Plug
							type={'order'}
							onClick={() => console.log('click orders button')}
						/>
					) :
					(
						<ul className={style.orders__list}>
							{ // Rendering cards
								renderItems()
							}
						</ul>
					)
			}




		</section>
	)
}

export default Orders
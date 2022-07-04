import React from 'react'
import style from './Orders.module.scss'
import Plug from '../../components/Plug/Plug';

const Orders = () => {
	return (
		<section className={style.orders}>
			<h1 className={style.orders__title}>Мои заказы</h1>
			<Plug
				type={'order'}
				onClick={console.log('click orders button')}
			/>
		</section>
	)
}

export default Orders
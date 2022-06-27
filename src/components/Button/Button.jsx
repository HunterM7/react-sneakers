import React from "react"
import style from './Button.module.scss'

const Button = (
	{
		type = 'add', // favorite / add / remove
		isActive = 'true', // true / false
	}
) => {

	let className = `${style[`btn`]}`;

	className +=
		type === 'add' ? ` ${style[`btn--add`]}` :
			type === 'remove' ? ` ${style[`btn--remove`]}` :
				type === 'favorite' ? ` ${style[`btn--favorite`]}` : ''

	className += isActive === 'true' ? ` ${style[`btn--active`]}` : ''

	return (
		<button className={`
			${className}
		`}>
			<div className={style.btn__img}></div>
		</button>
	)
}

export default Button
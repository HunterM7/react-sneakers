import React from "react"
import style from './Button.module.scss'

const Button = (
	{
		type = 'add', // favorite / add / remove
		isActive = false, // true / false
		onClick = () => console.log('You forgot to add a function :=)'), // Any function
	}
) => {

	let className = `${style[`btn`]}`;

	className +=
		type === 'add' ? ` ${style[`btn--add`]}` :
			type === 'remove' ? ` ${style[`btn--remove`]}` :
				type === 'favorite' ? ` ${style[`btn--favorite`]}` : ''

	className += isActive ? ` ${style[`btn--active`]}` : ''

	return (
		<button onClick={onClick} className={`
			${className}
		`}>
			<div className={style.btn__img}></div>
		</button>
	)
}

export default Button
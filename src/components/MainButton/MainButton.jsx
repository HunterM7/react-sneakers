import React from 'react'
import style from './MainButton.module.scss'

const MainButton = ({
	text,
	isSubmit,
	onClickFunc,
	isDisabled = false,
}) => {
	return (
		<button disabled={isDisabled} className={style.btn} onClick={onClickFunc} >

			{text}

			<div className={`
				${style.btn__arrow}
				${isSubmit ? `${style.rigthArrow}` : `${style.leftArrow}`}
			`}>

				<img
					src="/img/arrow.svg"
					alt="arrow" />

			</div>

		</button>
	)
}

export default MainButton
import React from "react"
import style from './Searchbar.module.scss'
import Button from "../Button/Button"

const Searchbar = ({ searchValue, setSearchValue }) => {
	return (
		<div className={style.searchbar}>

			<img
				className={style.searchbar__img}
				src="img/search.svg" alt="Search"
			/>

			<div className={style.searchbar__input}>

				<input
					type="text"
					maxLength='20'
					placeholder="Search..."
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
				/>

			</div>

			<div className={style.searchbar__btn}>
				{
					searchValue &&
					<Button
						type="remove"
						onClick={() => setSearchValue('')}
					/>
				}
			</div>

		</div>
	)
}

export default Searchbar
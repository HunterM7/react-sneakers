function App() {
	return (
		<div className="wrapper">

			<header className="header">

				<div className="header__left">
					<img src="/img/logo.png" alt="Logo" />
					<div className="header__info">
						<h3>React sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>

				<ul className="header__rigth">
					<li>
						<img src="/img/cart.svg" alt="Logo" />
						<span>1205 руб.</span>
					</li>
					<li>
						<img src="/img/user.svg" alt="Logo" />
					</li>
				</ul>

			</header>

			<div className="content">

				<h1>Все кроссовки</h1>

				...

			</div>

		</div>
	)
}

export default App;

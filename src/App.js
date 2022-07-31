import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
	const [showCart, setShowCart] = useState(false);

	return (
		<Fragment>
			{showCart && <Cart hideCart={() => setShowCart(false)} />}
			<Header showCart={() => setShowCart(true)} />
			<Meals />
		</Fragment>
	);
}

export default App;

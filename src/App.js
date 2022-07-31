import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import { CartContextProvider } from "./store/cart-context";

function App() {
	const [showCart, setShowCart] = useState(false);

	return (
		<CartContextProvider>
			{showCart && <Cart hideCart={() => setShowCart(false)} />}
			<Header showCart={() => setShowCart(true)} />
			<Meals />
		</CartContextProvider>
	);
}

export default App;

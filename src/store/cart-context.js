const { createContext, useState } = require("react");

const CartContext = createContext({
	items: {},
	totalPrice: 0,
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
});

export const CartContextProvider = (props) => {
	const [items, setItems] = useState({});

	const addItem = (item) => {
		if (item.id in items) {
			item.amount += items[item.id].amount;
			setItems({ ...items, [item.id]: item });
			return;
		}
		setItems({ ...items, [item.id]: item });
	};

	const removeItem = (id) => {
		setItems(
			items.filter((element) => {
				return element.id !== id;
			})
		);
	};

	let totalPrice = 0;
	let totalAmount = 0;
	for (const key in items) {
		const element = items[key];
		totalPrice += element.amount * element.price;
		totalAmount += element.amount;
	}

	return (
		<CartContext.Provider
			value={{
				items: items,
				totalPrice: totalPrice,
				totalAmount: totalAmount,
				addItem: addItem,
				removeItem: removeItem,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;

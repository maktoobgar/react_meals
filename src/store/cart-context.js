const { createContext, useState } = require("react");

const CartContext = createContext({
	items: {},
	totalPrice: 0,
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
	replaceItem: (item) => {},
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

	const replaceItem = (item) => {
		if (item.id in items) {
			setItems({ ...items, [item.id]: item });
		}
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
				replaceItem: replaceItem,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;

import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import styles from "./CartItemSideForm.module.css";

const CartItemSideForm = (props) => {
	const ctx = useContext(CartContext);
	const [amount, setAmount] = useState(props.item.amount);

	const amountChanged = (event) => {
		setAmount(parseInt(event.target.value));
	};

	useEffect(() => {
		const timer = setTimeout(
			ctx.replaceItem({ ...props.item, amount: amount }),
			500
		);

		return () => {
			clearTimeout(timer);
		};
	}, [amount]);

	return (
		<div>
			<Input
				input={{
					id: "amount",
					type: "number",
					min: "1",
					step: "1",
					defaultValue: amount,
					className: styles["responsive-form-element"],
					onChange: amountChanged,
				}}
			/>
		</div>
	);
};

export default CartItemSideForm;

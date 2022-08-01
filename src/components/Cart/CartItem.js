import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
	const ctx = useContext(CartContext);

	const price = `$${(props.item.price * props.item.amount).toFixed(2)}`;

	const amountChanged = (event) => {
		ctx.replaceItem({ ...props.item, amount: parseInt(event.target.value) });
	};

	const deleteButtonClickedHandler = () => {
		ctx.removeItem(props.item.id);
	};

	return (
		<li className={styles.meal}>
			<div className={styles["meal-text-section"]}>
				<h3 className={styles["meal-name"]}>{props.item.name}</h3>
				<div className={styles["meal-description"]}>
					{props.item.description}
				</div>
				<div className={styles["meal-price"]}>{price}</div>
			</div>
			<div className="space-y-2">
				<Input
					input={{
						id: "amount",
						type: "number",
						min: "1",
						step: "1",
						defaultValue: props.item.amount,
						className: styles["responsive-form-element"],
						onChange: amountChanged,
					}}
				/>
				<button
					className={`button ${styles["responsive-form-element"]}`}
					onClick={deleteButtonClickedHandler}
				>
					delete
				</button>
			</div>
		</li>
	);
};

export default CartItem;

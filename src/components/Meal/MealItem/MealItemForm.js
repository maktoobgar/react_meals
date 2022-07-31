import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useContext, useRef } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
	const ctx = useContext(CartContext);
	const inputRef = useRef();

	const addItem = () => {
		console.log(props.id);
		ctx.addItem({
			id: props.id,
			name: props.name,
			description: props.description,
			price: props.price,
			amount: parseInt(inputRef.current.value),
		});
	};

	return (
		<div className={styles["meal-item"]}>
			<Input
				input={{
					id: "amount",
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
					className: styles["responsive-form-element"],
					ref: inputRef,
				}}
			/>
			<button
				className={`${styles["add-button"]} ${styles["responsive-form-element"]}`}
				onClick={addItem}
			>
				Add
			</button>
		</div>
	);
};

export default MealItemForm;

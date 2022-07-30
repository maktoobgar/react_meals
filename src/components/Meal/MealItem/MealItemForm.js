import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
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
				}}
			/>
			<button
				className={`${styles["add-button"]} ${styles["responsive-form-element"]}`}
			>
				Add
			</button>
		</div>
	);
};

export default MealItemForm;

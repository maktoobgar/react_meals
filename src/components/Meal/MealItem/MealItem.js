import styles from "./MealItem.module.css";

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	return (
		<li className={styles.meal}>
			<div className={styles["meal-text-section"]}>
				<h3 className={styles["meal-name"]}>{props.name}</h3>
				<div className={styles["meal-description"]}>{props.description}</div>
				<div className={styles["meal-price"]}>{price}</div>
			</div>
			<div></div>
		</li>
	);
};

export default MealItem;

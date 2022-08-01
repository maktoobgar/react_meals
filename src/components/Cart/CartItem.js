import styles from "./CartItem.module.css";
import CartItemSideForm from "./CartItemSideForm";

const CartItem = (props) => {
	const price = `$${(props.item.price * props.item.amount).toFixed(2)}`;

	return (
		<li className={styles.meal}>
			<div className={styles["meal-text-section"]}>
				<h3 className={styles["meal-name"]}>{props.item.name}</h3>
				<div className={styles["meal-description"]}>
					{props.item.description}
				</div>
				<div className={styles["meal-price"]}>{price}</div>
			</div>
			<CartItemSideForm item={props.item} />
		</li>
	);
};

export default CartItem;

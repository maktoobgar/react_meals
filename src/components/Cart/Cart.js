import Overlay from "../UI/Overlay";
import styles from "./Cart.module.css";

const Cart = () => {
	const items = [
		{ id: "0", name: "sushi", amount: 2, price: 12.2 },
		{ id: "1", name: "dick", amount: 1, price: 14.0 },
	];
	const cartItems = (
		<ul>
			{items.map((element) => {
				return (
					<li key={element.id} className={styles.item}>
						{element.name}
					</li>
				);
			})}
		</ul>
	);

	return (
		<Overlay>
			<div className={styles.cart}>
				{cartItems}
				<div className={styles.total}>
					<span>Total Amount</span>
					<span>$15.21</span>
				</div>
				<div className={styles.buttons}>
					<button className={styles.button}>Close</button>
					<button className={styles.button}>Order</button>
				</div>
			</div>
		</Overlay>
	);
};

export default Cart;

import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Overlay from "../UI/Overlay";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const ctx = useContext(CartContext);
	const totalPrice = `$${ctx.totalPrice.toFixed(2)}`;

	const backdrop = {
		className: styles.fadeIn,
	};

	let items = [];
	for (const key in ctx.items) {
		const element = ctx.items[key];
		const item = <CartItem key={element.id} item={element} />;
		items = [...items, item];
	}

	const cartItems = <ul>{items}</ul>;

	return (
		<Overlay onBackdropClick={props.hideCart} backdrop={backdrop}>
			<div className={`${styles.cart}`}>
				{cartItems}
				<div className={styles.total}>
					<span>Total Amount</span>
					<span>{totalPrice}</span>
				</div>
				<div className={styles.buttons}>
					<button className={styles.button} onClick={props.hideCart}>
						Close
					</button>
					{ctx.totalPrice !== 0 && (
						<button className={styles.button}>Order</button>
					)}
				</div>
			</div>
		</Overlay>
	);
};

export default Cart;

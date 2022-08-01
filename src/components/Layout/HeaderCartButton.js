import { useContext } from "react";
import cart from "../../assets/cart_shopping.png";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const ctx = useContext(CartContext);

	return (
		<button className={styles["header-button"]} onClick={props.showCart}>
			<img src={cart} alt="" />
			<p
				className={`${styles["header-number"]} ${
					ctx.totalAmount > 9 && styles["header-number-double-digit"]
				}`}
			>
				{ctx.totalAmount}
			</p>
		</button>
	);
};

export default HeaderCartButton;

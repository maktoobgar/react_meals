import { useContext, useEffect, useState } from "react";
import cart from "../../assets/cart_shopping.png";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const ctx = useContext(CartContext);
	const [btnBump, setBtnBump] = useState(false);

	const { items } = ctx;

	const btnClasses = `${styles["header-button"]} ${btnBump && styles.bump}`;

	useEffect(() => {
		if (Object.keys(items).length === 0) {
			return;
		}
		setBtnBump(true);
		setTimeout(() => setBtnBump(false), 300);
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.showCart}>
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

import cart from "../../assets/cart_shopping.png";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	return (
		<button className={styles["header-button"]} onClick={props.showCart}>
			<img src={cart} alt="" />
			<p className={styles["header-number"]}>0</p>
		</button>
	);
};

export default HeaderCartButton;

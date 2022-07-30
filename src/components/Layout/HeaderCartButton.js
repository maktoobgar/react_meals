import cart from "../../assets/cart_shopping.png";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
	return (
		<button className={styles["header-button"]}>
			<img src={cart} alt="" />
			<p className={styles["header-number"]}>0</p>
		</button>
	);
};

export default HeaderCartButton;

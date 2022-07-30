import food from "../../assets/food.jpg";
import styles from "./HeaderBanner.module.css";

const HeaderBanner = () => {
	return (
		<div className={styles["header-banner"]}>
			<img src={food} alt="a table full of food" />
		</div>
	);
};

export default HeaderBanner;

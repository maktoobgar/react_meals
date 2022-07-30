import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="w-full">
				<h1 className={styles["header-title"]}>restaurant meals</h1>
			</div>
			<HeaderCartButton />
		</header>
	);
};

export default Header;

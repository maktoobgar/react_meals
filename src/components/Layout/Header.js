import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="w-full">
				<h1 className={styles["header-title"]}>restaurant meals</h1>
			</div>
			<button className={styles["header-button"]}>press me</button>
		</header>
	);
};

export default Header;

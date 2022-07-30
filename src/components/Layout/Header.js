import { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderBanner from "./HeaderBanner";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
	return (
		<Fragment>
			<header className={styles.header}>
				<div className="w-full">
					<h1 className={styles["header-title"]}>restaurant meals</h1>
				</div>
				<HeaderCartButton />
			</header>
			<HeaderBanner />
		</Fragment>
	);
};

export default Header;

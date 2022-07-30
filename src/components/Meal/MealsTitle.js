import styles from "./MealsTitle.module.css";

const MealsTitle = () => {
	return (
		<div className={styles["list-title"]}>
			<div>
				<h1>delicious food, waiting for you</h1>
				<p>
					our served foods are made of some natural elements of the nature and
					delicious.
				</p>
				<p>
					everything in our restaurant is served fresh and totally fine just for
					our customers.
				</p>
				<p>Have a good meal...</p>
			</div>
		</div>
	);
};

export default MealsTitle;

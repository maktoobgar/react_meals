import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealsList.module.css";

const meals = [
	{
		id: 0,
		name: "sushi",
		description: "finest fish and veggies",
		price: 12.2,
	},
	{
		id: 1,
		name: "burger",
		description: "just a fat big burger",
		price: 15,
	},
	{
		id: 2,
		name: "rural yogurt",
		description: "natural yogurt from Iran",
		price: 15,
	},
	{
		id: 3,
		name: "kebab",
		description: "traditional food from Turkey",
		price: 15,
	},
];

const MealsList = () => {
	const data = meals.map((element) => {
		return (
			<MealItem
				id={element.id}
				key={element.id}
				name={element.name}
				description={element.description}
				price={element.price}
			/>
		);
	});

	return (
		<Card className={`${styles["important-mt-10"]} ${styles["fadeIn"]}`}>
			<ul>{data}</ul>
		</Card>
	);
};

export default MealsList;

import { Fragment } from "react";
import MealsList from "./MealsList";
import MealsTitle from "./MealsTitle";

const Meals = () => {
	return (
		<Fragment>
			<MealsTitle />
			<MealsList />
		</Fragment>
	);
};

export default Meals;

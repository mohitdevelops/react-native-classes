import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ navigation }) => {
	//registered for screen component
	const route = useRoute();
	const catId = route.params.catergoryId;
	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id == catId
		).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	function rendedMealItem(itemData) {
		const mealItemsProps = {
			id: itemData.item.id,
			title: itemData.item.title,
			imageURL: itemData.item.imageUrl,
			duration: itemData.item.duration,
			affordability: itemData.item.affordability,
		};
		return <MealItem {...mealItemsProps} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={rendedMealItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

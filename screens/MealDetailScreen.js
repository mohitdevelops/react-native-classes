import { useLayoutEffect } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	Button,
} from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;

	const selectedMeals = MEALS.find((meal) => meal.id === mealId);

	function headerButtonHandler() {
		console.log("Pressed");
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return <IconButton onTapped={headerButtonHandler} />;
			},
		});
	}, [navigation, headerButtonHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeals.title}</Text>
			<MealsDetails
				duration={selectedMeals.duration}
				affordability={selectedMeals.affordability}
				complexity={selectedMeals.complexity}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingedient</Subtitle>
					<List data={selectedMeals.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeals.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "#fff",
	},
	detailText: {
		color: "#fff",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
		height: 350,
	},
});

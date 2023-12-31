import {
	View,
	Text,
	Pressable,
	Image,
	StyleSheet,
	Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealsDetails from "./MealsDetails";

const MealItem = ({
	id,
	title,
	imageURL,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();

	function selectMealItemHandler() {
		navigation.navigate("Meal Detail", {
			mealId: id,
			mealTitle: title,
			mealImageURL: imageURL,
			mealDuration: duration,
			mealComplexity: complexity,
			mealAffordability: affordability,
		});
	}

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
				onPress={selectMealItemHandler}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageURL }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealsDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "#fff",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.35,
		shadowRadius: 16,
		shadowOffset: { width: 0, height: 2 },
		overflow: Platform.OS == "android" ? "hidden" : "visible",
	},
	innerContainer: { borderRadius: 8, overflow: "hidden" },
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 10,
		margin: 8,
	},

	buttonPressed: {
		opacity: 0.5,
	},
});

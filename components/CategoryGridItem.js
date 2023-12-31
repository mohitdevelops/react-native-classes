import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryGridItem = ({ title, color, onPress }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: "#ddd" }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				onPress={onPress}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryGridItem;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		backgroundColor: "#fff",
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 2 },
		overflow: Platform.OS == "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});

import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const MealsDetails = ({ duration, complexity, affordability, style, textStyle }) => {
	return (
		<ScrollView style={[styles.details, style]}>
			<Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
			<Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
			<Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
		</ScrollView>
	);
};

export default MealsDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
		justifyContent: "center",
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});

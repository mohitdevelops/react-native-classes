import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constant/constants";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	subtitle: {
		color: Colors.HeaderColor,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
		borderBottomColor: "#fff",
		borderBottomWidth: 2,
	},
});

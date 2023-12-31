import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onTapped }) => {
	return (
		<Pressable
			onPress={onTapped}
			style={({ pressed }) => pressed && styles.pressed}
		>
			<Ionicons name="star" color={'#fff'} size={24} />
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
});

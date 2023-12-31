import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constant/constants";

const List = ({ data }) => {
	return data.ingredients.map((datapoint) => (
		<View style={styles.listItems} key={datapoint}>
			<Text style={styles.itemsText}>{datapoint}</Text>
		</View>
	));
};

export default List;

const styles = StyleSheet.create({
    listItems:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#fff'
    },
    itemsText:{
        color: Colors.HeaderColor.Bg
    }
});

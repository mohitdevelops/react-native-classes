import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./constant/constants";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						//screentoptions for all screens inside Stack.Navigato
						headerStyle: {
							backgroundColor: Colors.HeaderColor.Bg,
						},
						headerTintColor: "#fff", //color on the header text
						contentStyle: {
							backgroundColor: Colors.HeaderColor.Content,
						},
					}}
				>
					<Stack.Screen
						name="Categories"
						component={CategoriesScreen}
						options={{
							title: "All Meals Categories",
						}}
					/>
					<Stack.Screen
						name="Meals Overview"
						component={MealsOverviewScreen}
						options={({ route, navigation }) => {
							return {
								title: route.params.categoryId,
							};
						}}
					/>
					<Stack.Screen
						name="Meal Detail"
						component={MealDetailScreen}
						options={{
							headerRight: () => {
								return <Button title="Tap me!" />;
							},
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
